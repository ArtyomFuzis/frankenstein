import './MainPage.css';
import image1 from "./assets/psz.png"
import image2 from "./assets/mosh.png"
import image3 from "./assets/fuzis.png"
import image4 from "./assets/vaneshik.png"
import { Link } from 'react-router-dom';

function MainPage() {
    const images = [
        { src: image2, alt: 'Mosh', path: '/mosh' },
        { src: image3 , alt: 'Fuzis', path: '/fuzis' },
        { src: image1, alt: 'PSZ', path: '/psz' },
        { src: image4, alt: 'Vaneshik', path: '/vaneshik' },
    ];

    return (
        <div className="main-page">
            <div className="image-container">
                {images.map((image, index) => (
                    <Link key={index} to={image.path} className="image-box">
                        <img src={image.src} alt={image.alt} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default MainPage;