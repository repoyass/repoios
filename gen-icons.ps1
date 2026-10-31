$ErrorActionPreference = 'Stop'
$outDir = 'C:\Users\THEONE-1\Desktop\newproject\public\icons'
New-Item -ItemType Directory -Force -Path $outDir | Out-Null
Add-Type -AssemblyName System.Drawing

function New-Icon([int]$size, [string]$path) {
  $bmp = New-Object System.Drawing.Bitmap($size, $size)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.Clear([System.Drawing.Color]::Transparent)

  $radius = [int]($size * 0.2237)
  $bg = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 142, 142, 147))
  $gp = New-Object System.Drawing.Drawing2D.GraphicsPath
  $w = $size - 1
  $h = $size - 1
  $r = New-Object System.Drawing.Rectangle(0, 0, $w, $h)
  $d = $radius * 2
  $gp.AddArc($r.X, $r.Y, $d, $d, 180, 90)
  $gp.AddArc($r.Right - $d, $r.Y, $d, $d, 270, 90)
  $gp.AddArc($r.Right - $d, $r.Bottom - $d, $d, $d, 0, 90)
  $gp.AddArc($r.X, $r.Bottom - $d, $d, $d, 90, 90)
  $gp.CloseFigure()
  $g.FillPath($bg, $gp)

  $cx = $size / 2
  $cy = $size / 2
  $outerR = $size * 0.30
  $innerR = $size * 0.20
  $holeR = $size * 0.09
  $white = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 255, 255, 255))
  $gray = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 142, 142, 147))

  for ($i = 0; $i -lt 8; $i++) {
    $ang = $i * 45
    $state = $g.Save()
    $g.TranslateTransform($cx, $cy)
    $g.RotateTransform($ang)
    $w = $size * 0.08
    $h = $size * 0.09
    $y = -($outerR + $size * 0.045)
    $g.FillRectangle($white, -($size * 0.04), $y, $w, $h)
    $g.Restore($state)
  }
  $g.FillEllipse($white, $cx - $outerR, $cy - $outerR, $outerR * 2, $outerR * 2)
  $g.FillEllipse($gray, $cx - $innerR, $cy - $innerR, $innerR * 2, $innerR * 2)
  $g.FillEllipse($white, $cx - $holeR, $cy - $holeR, $holeR * 2, $holeR * 2)

  $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose()
  $bmp.Dispose()
}

New-Icon 180 (Join-Path $outDir 'icon-180.png')
New-Icon 192 (Join-Path $outDir 'icon-192.png')
New-Icon 512 (Join-Path $outDir 'icon-512.png')
Write-Output 'icons generated'
