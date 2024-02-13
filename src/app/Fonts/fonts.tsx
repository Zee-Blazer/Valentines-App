import { 
    Inter, Roboto, Dancing_Script, Pacifico, Caveat, Shadows_Into_Light, Great_Vibes 
} from "next/font/google";

export const inter = Inter({ 
    subsets: ["latin"],
    variable: "--inter-font",
    preload: true,
});

export const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
    variable: "--roboto-font",
    preload: true,
})

export const dancingscript = Dancing_Script({
    weight: ['400', "500", '700'],
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
    variable: "--dancingscript-font",
    preload: true,
})

export const pacifico = Pacifico({
    weight: ['400'],
    style: ['normal'],
    subsets: ["latin"],
    variable: "--pacifico",
    preload: true,
})

export const caveat = Caveat({
    weight: ['400'],
    style: ['normal'],
    subsets: ["latin"],
    variable: "--caveat-type",
    preload: true,
})

export const shadows = Shadows_Into_Light({
    weight: ['400'],
    style: ['normal'],
    subsets: ["latin"],
    variable: "--shadows__into",
    preload: true,
})

export const greatvibes = Great_Vibes({
    weight: ['400'],
    style: ['normal'],
    subsets: ["latin"],
    preload: true,
    variable: "--greatvibes"
})
