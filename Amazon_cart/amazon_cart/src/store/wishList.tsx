import keyboardImage from '../assets/keyboard.jpg';
import chargerImage from '../assets/charger.jpg';
import monitorImage from '../assets/monitor.jpg';
import bookImage from '../assets/book.jpg';

export interface wishlistType{
    id: number,
    name: string,
    price: number,
    image: string,
    inCart: boolean
}


export const wishlistitems:wishlistType[] = [
        {
            id: 1,
            name: "Ant Esports MK1400 Pro Backlit Membrane Wired Gaming Keyboard with Mixed Colour Lighting, White & Black Keycaps, Double Injection Key Caps - Black",
            price: 999,
            image: keyboardImage,
            inCart: false
        },
        {
            id: 2,
            name: "Apple 20W USB-C Power Adapter (for iPhone, iPad & AirPods)",
            price: 1549,
            image: chargerImage,
            inCart: false
        },
        {
            id: 3,
            name: "Acer EK220Q 21.5 Inch (54.61 cm) Full HD (1920x1080) Pixels VA Panel LCD Monitor with LED Back Light I 1 MS VRB, 100Hz Refresh I 250 Nits I HDMI & VGA Ports with HDMI Cable I Eye Care Features (Black)",
            price: 5599,
            image: monitorImage,
            inCart: false
        },
        {
            id: 4,
            name: "Who Will Cry When You Die?",
            price: 197,
            image: bookImage,
            inCart: false
        }
]


