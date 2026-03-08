# publish.ps1 - Sriman's Architecture Portfolio Publishing Utility
# Usage: ./publish.ps1 "Your commit message"

param (
    [Parameter(Mandatory=$false, Position=0)]
    [string]$CommitMessage = "chore: update portfolio content"
)

Write-Host "🚀 Starting Portfolio Publishing Workflow..." -ForegroundColor Cyan

# 1. Check for change
$status = git status --porcelain
if (-not $status) {
    Write-Host "✅ No changes detected. Workspace is clean." -ForegroundColor Green
    exit
}

Write-Host "📦 Changes detected. Preparing to sync..."

# 2. Git Workflow
Write-Host "📝 Committing changes: $CommitMessage" -ForegroundColor Yellow
git add .
git commit -m $CommitMessage

Write-Host "📤 Pushing to GitHub..." -ForegroundColor Yellow
git push

if ($LASTEXITCODE -eq 0) {
    Write-Host "🎉 Portfolio successfully published to GitHub!" -ForegroundColor Green
} else {
    Write-Host "❌ Push failed. Please check your internet connection or git remote settings." -ForegroundColor Red
}
