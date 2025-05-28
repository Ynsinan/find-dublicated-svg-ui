export const theme = {
	colors: {
		primary: {
			50: "#f0f9ff",
			100: "#e0f2fe",
			200: "#bae6fd",
			300: "#7dd3fc",
			400: "#38bdf8",
			500: "#0ea5e9",
			600: "#0284c7",
			700: "#0369a1",
			800: "#075985",
			900: "#0c4a6e",
		},
		secondary: {
			50: "#fafaf9",
			100: "#f5f5f4",
			200: "#e7e5e4",
			300: "#d6d3d1",
			400: "#a8a29e",
			500: "#78716c",
			600: "#57534e",
			700: "#44403c",
			800: "#292524",
			900: "#1c1917",
		},
		success: {
			50: "#f0fdf4",
			100: "#dcfce7",
			200: "#bbf7d0",
			300: "#86efac",
			400: "#4ade80",
			500: "#22c55e",
			600: "#16a34a",
			700: "#15803d",
			800: "#166534",
			900: "#14532d",
		},
		error: {
			50: "#fef2f2",
			100: "#fee2e2",
			200: "#fecaca",
			300: "#fca5a5",
			400: "#f87171",
			500: "#ef4444",
			600: "#dc2626",
			700: "#b91c1c",
			800: "#991b1b",
			900: "#7f1d1d",
		},
		warning: {
			50: "#fffbeb",
			100: "#fef3c7",
			200: "#fde68a",
			300: "#fcd34d",
			400: "#fbbf24",
			500: "#f59e0b",
			600: "#d97706",
			700: "#b45309",
			800: "#92400e",
			900: "#78350f",
		},
		gray: {
			50: "#f9fafb",
			100: "#f3f4f6",
			200: "#e5e7eb",
			300: "#d1d5db",
			400: "#9ca3af",
			500: "#6b7280",
			600: "#4b5563",
			700: "#374151",
			800: "#1f2937",
			900: "#111827",
		},
		white: "#ffffff",
		black: "#000000",
	},

	typography: {
		fontFamily: {
			sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
			mono: ["Fira Code", "monospace"],
		},
		fontSize: {
			xs: "0.75rem", // 12px
			sm: "0.875rem", // 14px
			base: "1rem", // 16px
			lg: "1.125rem", // 18px
			xl: "1.25rem", // 20px
			"2xl": "1.5rem", // 24px
			"3xl": "1.875rem", // 30px
			"4xl": "2.25rem", // 36px
			"5xl": "3rem", // 48px
			"6xl": "3.75rem", // 60px
		},
		fontWeight: {
			light: 300,
			normal: 400,
			medium: 500,
			semibold: 600,
			bold: 700,
			extrabold: 800,
		},
		lineHeight: {
			tight: 1.25,
			snug: 1.375,
			normal: 1.5,
			relaxed: 1.625,
			loose: 2,
		},
	},

	spacing: {
		0: "0",
		1: "0.25rem", // 4px
		2: "0.5rem", // 8px
		3: "0.75rem", // 12px
		4: "1rem", // 16px
		5: "1.25rem", // 20px
		6: "1.5rem", // 24px
		8: "2rem", // 32px
		10: "2.5rem", // 40px
		12: "3rem", // 48px
		16: "4rem", // 64px
		20: "5rem", // 80px
		24: "6rem", // 96px
		32: "8rem", // 128px
	},

	borderRadius: {
		none: "0",
		sm: "0.125rem", // 2px
		base: "0.25rem", // 4px
		md: "0.375rem", // 6px
		lg: "0.5rem", // 8px
		xl: "0.75rem", // 12px
		"2xl": "1rem", // 16px
		"3xl": "1.5rem", // 24px
		full: "9999px",
	},

	shadows: {
		sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
		base: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
		md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
		lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
		xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
		"2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
		inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
	},

	animation: {
		duration: {
			fast: "150ms",
			normal: "300ms",
			slow: "500ms",
		},
		easing: {
			ease: "ease",
			easeIn: "ease-in",
			easeOut: "ease-out",
			easeInOut: "ease-in-out",
		},
	},

	breakpoints: {
		sm: "640px",
		md: "768px",
		lg: "1024px",
		xl: "1280px",
		"2xl": "1536px",
	},

	zIndex: {
		hide: -1,
		auto: "auto",
		base: 0,
		docked: 10,
		dropdown: 1000,
		sticky: 1100,
		banner: 1200,
		overlay: 1300,
		modal: 1400,
		popover: 1500,
		skipLink: 1600,
		toast: 1700,
		tooltip: 1800,
	},
};

export type Theme = typeof theme;
