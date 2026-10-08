# Builds favicon/mark assets from the supplied logo artwork:
#   public/mark.png        - logo with the dark background keyed out (nav, hero)
#   public/icon-512.png    - square app icon
#   public/icon-192.png
#   public/favicon-32.png
param()

Add-Type -AssemblyName System.Drawing

$src = "C:\Users\USER\OneDrive\Desktop\Nexavora Tech\Assets\WhatsApp Image 2026-10-07 at 3.13.06 PM (1).jpeg"
$out = "C:\Users\USER\OneDrive\Desktop\Nexavora Tech\nexavora-site\public"

$bmp = [System.Drawing.Bitmap]::FromFile($src)

# 1. Key out the near-black background: alpha comes from how bright the pixel
#    is, so the dark backdrop disappears and the glow stays soft.
$keyed = New-Object System.Drawing.Bitmap($bmp.Width, $bmp.Height)
$minX = $bmp.Width; $minY = $bmp.Height; $maxX = 0; $maxY = 0
for ($y = 0; $y -lt $bmp.Height; $y++) {
  for ($x = 0; $x -lt $bmp.Width; $x++) {
    $c = $bmp.GetPixel($x, $y)
    $peak = [Math]::Max($c.R, [Math]::Max($c.G, $c.B))
    $a = if ($peak -lt 12) { 0 } elseif ($peak -gt 235) { 255 } else { [int](($peak - 12) * 255 / 223) }
    $keyed.SetPixel($x, $y, [System.Drawing.Color]::FromArgb($a, $c.R, $c.G, $c.B))
    if ($a -gt 24) {
      if ($x -lt $minX) { $minX = $x }; if ($x -gt $maxX) { $maxX = $x }
      if ($y -lt $minY) { $minY = $y }; if ($y -gt $maxY) { $maxY = $y }
    }
  }
}

# 2. Trim to the artwork bounds so the mark can be placed without dead space.
$pad = 8
$minX = [Math]::Max(0, $minX - $pad); $minY = [Math]::Max(0, $minY - $pad)
$maxX = [Math]::Min($bmp.Width - 1, $maxX + $pad); $maxY = [Math]::Min($bmp.Height - 1, $maxY + $pad)
$w = $maxX - $minX + 1; $h = $maxY - $minY + 1
$rect = New-Object System.Drawing.Rectangle($minX, $minY, $w, $h)
$mark = $keyed.Clone($rect, $keyed.PixelFormat)
$mark.Save((Join-Path $out "mark.png"), [System.Drawing.Imaging.ImageFormat]::Png)
Write-Output "mark.png: ${w}x${h}"

# 3. Square icons: mark centred on the site background.
$bg = [System.Drawing.Color]::FromArgb(255, 7, 10, 24)
foreach ($size in @(512, 192, 32)) {
  $canvas = New-Object System.Drawing.Bitmap($size, $size)
  $g = [System.Drawing.Graphics]::FromImage($canvas)
  $g.SmoothingMode = "AntiAlias"
  $g.InterpolationMode = "HighQualityBicubic"
  $g.Clear($bg)
  $targetW = [int]($size * 0.74)
  $targetH = [int]($targetW * $h / $w)
  if ($targetH -gt $size * 0.8) { $targetH = [int]($size * 0.8); $targetW = [int]($targetH * $w / $h) }
  $dx = [int](($size - $targetW) / 2); $dy = [int](($size - $targetH) / 2)
  $g.DrawImage($mark, $dx, $dy, $targetW, $targetH)
  $g.Dispose()
  $canvas.Save((Join-Path $out "icon-$size.png"), [System.Drawing.Imaging.ImageFormat]::Png)
  $canvas.Dispose()
  Write-Output "icon-$size.png"
}
$mark.Dispose(); $keyed.Dispose(); $bmp.Dispose()
Write-Output "done"
