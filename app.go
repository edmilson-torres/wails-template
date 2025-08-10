package main

import (
	"context"
	"fmt"
	"runtime"

	"github.com/shirou/gopsutil/mem"

	"golang.org/x/text/cases"
	"golang.org/x/text/language"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

func (a *App) GetSystemInfo() (string, error) {
	// Get OS and architecture
	osName := runtime.GOOS
	cpuArch := runtime.GOARCH

	// Get CPU number
	cpuNumber := runtime.NumCPU()

	// Get total RAM
	v, err := mem.VirtualMemory()
	if err != nil {
		return "", fmt.Errorf("failed to get memory info: %w", err)
	}
	totalRAMGB := float64(v.Total) / (1024 * 1024 * 1024) // Convert bytes to GB

	// Format the output string
	infoString := fmt.Sprintf(
		"OS: %s, CPU Architecture: %s, CPU Cores: %d, Total RAM: %.2f GB",
		cases.Title(language.English).String(osName), // Capitalize OS name
		cpuArch,
		cpuNumber,
		totalRAMGB,
	)

	return infoString, nil
}
