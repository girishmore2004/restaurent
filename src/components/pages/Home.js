// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import pizzaImage from '../images/pizza.jpg';
// import pizzaImage2 from '../images/pizza2.jpg';
// import g2 from '../images/g2.jpg';
// import g3 from '../images/g3.jpg';
// import g from '../images/g.jpg';
// import p1 from '../images/p1.jpg';
// import p2 from '../images/p2.webp';
// import h3 from '../images/3.jpg';
// import h4 from '../images/4.jpg';
// import h6 from '../images/6.jpg';
// import styled from 'styled-components';

// const Home = () => {
//     return (
//         <div className="container my-5" style={{ maxWidth: '1200px', fontFamily: "cursive" }}>
//             <Section className="special-offers my-0 text-center" style={{boxShadow:"0px 0px 20px aqua"}}>
//                 <SectionTitle>Special Offers</SectionTitle>
//                 <div className="row g-4">
//                     <div className="col-md-6 mb-3">
//                         <Card className="card bg-dark text-white shadow-lg">
//                             <CardBody className="card-body p-5" style={{
//                                 backgroundImage: `url(${pizzaImage})`,
//                                 backgroundSize: 'cover',
//                                 backgroundPosition: 'center',
//                                 textAlign: "end"
//                             }}>
//                                 <h3 className="card-title">50% Off Pizza Mondays</h3>
//                                 <p className="card-text">Enjoy half-price pizzas every Monday.</p>
//                             </CardBody>
//                         </Card>
//                     </div>
//                     <div className="col-md-6 mb-3">
//                         <Card className="card bg-dark text-white shadow-lg">
//                             <CardBody className="card-body p-5" style={{
//                                 backgroundImage: `url(${pizzaImage2})`,
//                                 backgroundSize: 'cover',
//                                 backgroundPosition: 'center',
//                                 textAlign: "start"
//                             }}>
//                                 <h3 className="card-title">Buy One Get One Free</h3>
//                                 <p className="card-text">On all desserts every Friday.</p>
//                             </CardBody>
//                         </Card>
//                     </div>
//                 </div>
//             </Section>

//             <Section className="chefs-specials my-5 text-center" style={{boxShadow:"0px 0px 20px aqua"}}>
//                 <SectionTitle>Chef's Specials (Non Veg)</SectionTitle>
//                 <div className="row g-4">
//                     <div className="col-md-6 mb-3">
//                         <Card className="card bg-dark text-white shadow-lg">
//                             <CardBody className="card-body p-5" style={{
//                                 backgroundImage: `url(${g})`,
//                                 backgroundSize: 'cover',
//                                 backgroundPosition: 'center',
//                                 textAlign: "start"
                            
//                             }}>
//                                 <h3>Grilled Salmon</h3>
//                                 <p>Freshly grilled salmon with a lemon butter sauce.</p>
//                             </CardBody>
//                         </Card>
//                     </div>
//                     <div className="col-md-6 mb-3">
//                         <Card className="card bg-dark text-white shadow-lg">
//                             <CardBody className="card-body p-5" style={{
//                                 backgroundImage: `url(${g3})`,
//                                 backgroundSize: 'cover',
//                                 backgroundPosition: 'center',
//                                 textAlign: "end"
//                             }}>
//                                 <h3>Beef Wellington</h3>
//                                 <p>Perfectly cooked beef wrapped in puff pastry.</p>
//                             </CardBody>
//                         </Card>
//                     </div>
//                 </div>
//             </Section>
//             <Section className="chefs-specials my-5 text-center" style={{boxShadow:"0px 0px 20px aqua"}}>
//                 <SectionTitle>Chef's Specials (Veg)</SectionTitle>
//                 <div className="row g-4">
//                     <div className="col-md-6 mb-3">
//                         <Card className="card bg-dark text-white shadow-lg">
//                             <CardBody className="card-body p-5" style={{
//                                 backgroundImage: `url(${p1})`,
//                                 backgroundSize: 'cover',
//                                 backgroundPosition: 'center',
//                                 textAlign: "start"
                            
//                             }}>
//                                 <h3>Paneer Butter Masala</h3>
//                                 <p>Creamy tomato-based curry with paneer, a globally loved dish.</p>
//                             </CardBody>
//                         </Card>
//                     </div>
//                     <div className="col-md-6 mb-3">
//                         <Card className="card bg-dark text-white shadow-lg">
//                             <CardBody className="card-body p-5" style={{
//                                 backgroundImage: `url(${p2})`,
//                                 backgroundSize: 'cover',
//                                 backgroundPosition: 'center',
//                                 textAlign: "end"
//                             }}>
//                                 <h3>Vegetable Biryani</h3>
//                                 <p>Fragrant rice dish with vegetables and spices, universally enjoyed.</p>
//                             </CardBody>
//                         </Card>
//                     </div>
//                 </div>
//             </Section>
//             <Section className="customer-reviews my-5 text-center" style={{boxShadow:"0px 0px 20px aqua"}}>
//                 <SectionTitle>Customer Reviews and Testimonials</SectionTitle>
//                 <div className="row g-4">
//                     <div className="col-md-6 mb-3">
//                         <Card className="card bg-dark text-white shadow-lg">
//                             <CardBody className="card-body p-5" style={{
//                                 backgroundImage: `url(${pizzaImage2})`,
//                                 backgroundSize: 'cover',
//                                 backgroundPosition: 'center',
//                                 textAlign: "start"
//                             }}>
//                                 <p>"Amazing food and great atmosphere!" - Jane Doe</p>
//                             </CardBody>
//                         </Card>
//                     </div>
//                     <div className="col-md-6 mb-3">
//                         <Card className="card bg-dark text-white shadow-lg">
//                             <CardBody className="card-body p-5" style={{
//                                 backgroundImage: `url(${g2})`,
//                                 backgroundSize: 'cover',
//                                 backgroundPosition: 'center',
//                                 textAlign: "start"
//                             }}>
//                                 <p>"The best dining experience I've ever had." - John Smith</p>
//                             </CardBody>
//                         </Card>
//                     </div>
//                 </div>
//             </Section>

//             <Section className="photo-gallery my-5 text-center" style={{boxShadow:"0px 0px 20px aqua"}}>
//                 <SectionTitle>Photo Gallery</SectionTitle>
//                 <div className="row g-4">
//                     <div className="col-md-4 mb-3">
//                         <img src={h3} className="img-fluid rounded shadow-lg" alt="Restaurant" />
//                     </div>
//                     <div className="col-md-4 mb-3">
//                         <img src={h4} className="img-fluid rounded shadow-lg" alt="Dish" />
//                     </div>
//                     <div className="col-md-4 mb-3">
//                         <img src={h6} className="img-fluid rounded shadow-lg" alt="Event" />
//                     </div>
//                 </div>
//             </Section>

//             <Section className="location-contact my-5 text-center" style={{color:"white", boxShadow:"0px 0px 20px aqua"}}>
//                 <SectionTitle>Location and Contact Information</SectionTitle>
//                 <p>123 Foodie St, Flavor Town, USA</p>
//                 <p>Email: info@restaurant.com | Phone: (123) 456-7890</p>
//             </Section>

//             <Section className="social-media my-5 text-center" style={{boxShadow:"0px 0px 20px aqua"}}>
//                 <SectionTitle>Follow Us</SectionTitle>
//                 <div>
//                     <a href="https://facebook.com" className="me-3 text-info"><FontAwesomeIcon icon={faFacebook}style={{ fontSize: '4rem' , marginRight:"2rem"}} /></a>
//                     <a href="https://instagram.com" className="me-3 text-info"><FontAwesomeIcon icon={faInstagram}style={{ fontSize: '4rem', marginRight:"2rem" }} /></a>
//                     <a href="https://twitter.com" className="me-3 text-info"><FontAwesomeIcon icon={faTwitter}style={{ fontSize: '4rem' }} /></a>
//                 </div>
//             </Section>

//             <Section className="newsletter-subscription my-5 text-center" style={{boxShadow:"0px 0px 20px aqua"}}>
//                 <SectionTitle>Subscribe to Our Newsletter</SectionTitle>
//                 <form onSubmit={handleSubscribe}>
//                     <div className="input-group mb-3 justify-content-center">
//                         <input
//                             type="email"
//                             className="form-control bg-dark text-white border-info"
//                             placeholder="Enter your email"
//                             required
//                             style={{ maxWidth: '300px' }}
//                         />
//                         <button
//                             type="submit"
//                             className="btn btn-info ms-2"
//                             style={{ borderRadius: '25px' }}
//                         >
//                             Subscribe
//                         </button>
//                     </div>
//                 </form>
//             </Section>
//         </div>
//     );

//     function handleSubscribe(e) {
//         e.preventDefault();
//         const email = e.target[0].value;

//         fetch('http://localhost:5000/api/userRoute/subscribe', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ email }),
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 alert('Subscribed successfully!');
//             })
//             .catch((error) => {
//                 console.error('Error:', error);
//             });
//     }
// }; 
// const Section = styled.section`
//     background-color: #000000;
//     border-radius: 10px;
//     padding: 20px;
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//     transition: transform 0.3s ease;
//     &:hover {
//         transform: translateY(-5px);
//     }
// `;

// const SectionTitle = styled.h2`
//     margin-bottom: 32px;
//     font-size: 2rem;
//     font-weight: 1000;
//     color: #182433;
//     background-color: aqua;
//     border-radius: 40px;
// `;

// const Card = styled.div`
//     background-color: #f8f9fa;
//     border-radius: 10px;
//     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//     overflow: hidden;
// `;

// const CardBody = styled.div`
//     padding: 20px;
//     text-align: center;
//     background-color: rgba(0, 0, 0, 0.6);
//     color: white;
// `;

// export default Home;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import pizzaImage from '../images/pizza.jpg';
import pizzaImage2 from '../images/pizza2.jpg';
import g2 from '../images/g2.jpg';
import g3 from '../images/g3.jpg';
import g from '../images/g.jpg';
import p1 from '../images/p1.jpg';
import p2 from '../images/p2.webp';
import h3 from '../images/3.jpg';
import h4 from '../images/4.jpg';
import h6 from '../images/6.jpg';
import styled from 'styled-components';

const Home = () => {
    const navigate = useNavigate();

    const navigateToOrder = (foodName, price) => {
      navigate(`/order/${encodeURIComponent(foodName)}/${encodeURIComponent(price)}`);
    };

    return (
        <div className="container my-5" style={{ maxWidth: '1200px', fontFamily: "cursive" }}>
            <Section className="special-offers my-0 text-center" style={{boxShadow:"0px 0px 20px aqua"}}>
                <SectionTitle>Special Offers</SectionTitle>
                <div className="row g-4">
                    <div className="col-md-6 mb-3">
                        <Card className="card bg-dark text-white shadow-lg" onClick={() => navigateToOrder('Pizza', '150')}>
                            <CardBody className="card-body p-5" style={{
                                backgroundImage: `url(${pizzaImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                textAlign: "end"
                            }}>
                                <h3 className="card-title">50% Off Pizza Mondays</h3>
                                <p className="card-text">Enjoy half-price pizzas every Monday.</p>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-6 mb-3">
                        <Card className="card bg-dark text-white shadow-lg" onClick={() => navigateToOrder('Desserts', '200')}>
                            <CardBody className="card-body p-5" style={{
                                backgroundImage: `url(${pizzaImage2})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                textAlign: "start"
                            }}>
                                <h3 className="card-title">Buy One Get One Free</h3>
                                <p className="card-text">On all desserts every Friday.</p>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </Section>
                         <Section className="chefs-specials my-5 text-center" style={{boxShadow:"0px 0px 20px aqua"}}>
                 <SectionTitle>Chef's Specials (Non Veg)</SectionTitle>
                 <div className="row g-4">
                     <div className="col-md-6 mb-3">
                         <Card className="card bg-dark text-white shadow-lg" onClick={() => navigateToOrder('Grilled Salmon', '250')}>
                            <CardBody className="card-body p-5" style={{
                                backgroundImage: `url(${g})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                textAlign: "start"
                            
                            }}>
                                <h3>Grilled Salmon</h3>
                                <p>Freshly grilled salmon with a lemon butter sauce.</p>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-6 mb-3">
                        <Card className="card bg-dark text-white shadow-lg" onClick={() => navigateToOrder('Beef Welligton', '350')}>
                            <CardBody className="card-body p-5" style={{
                                backgroundImage: `url(${g3})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                textAlign: "end"
                            }}>
                                <h3>Beef Wellington</h3>
                                <p>Perfectly cooked beef wrapped in puff pastry.</p>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </Section>
            <Section className="chefs-specials my-5 text-center" style={{boxShadow:"0px 0px 20px aqua"}}>
                <SectionTitle>Chef's Specials (Veg)</SectionTitle>
                <div className="row g-4">
                    <div className="col-md-6 mb-3">
                        <Card className="card bg-dark text-white shadow-lg" onClick={() => navigateToOrder('Paneer Butter Masala', '500')}>
                            <CardBody className="card-body p-5" style={{
                                backgroundImage: `url(${p1})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                textAlign: "start"
                            
                            }}>
                                <h3>Paneer Butter Masala</h3>
                                <p>Creamy tomato-based curry with paneer, a globally loved dish.</p>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-6 mb-3">
                        <Card className="card bg-dark text-white shadow-lg" onClick={() => navigateToOrder('Vegetable Biryani', '400')}>
                            <CardBody className="card-body p-5" style={{
                                backgroundImage: `url(${p2})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                textAlign: "end"
                            }}>
                                <h3>Vegetable Biryani</h3>
                                <p>Fragrant rice dish with vegetables and spices, universally enjoyed.</p>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </Section>
            <Section className="customer-reviews my-5 text-center" style={{boxShadow:"0px 0px 20px aqua"}}>
                <SectionTitle>Customer Reviews and Testimonials</SectionTitle>
                <div className="row g-4">
                    <div className="col-md-6 mb-3">
                        <Card className="card bg-dark text-white shadow-lg">
                            <CardBody className="card-body p-5" style={{
                                backgroundImage: `url(${pizzaImage2})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                textAlign: "start"
                            }}>
                                <p>"Amazing food and great atmosphere!" - Jane Doe</p>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-md-6 mb-3">
                        <Card className="card bg-dark text-white shadow-lg">
                            <CardBody className="card-body p-5" style={{
                                backgroundImage: `url(${g2})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                textAlign: "start"
                            }}>
                                <p>"The best dining experience I've ever had." - John Smith</p>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </Section>

            <Section className="photo-gallery my-5 text-center" style={{boxShadow:"0px 0px 20px aqua"}}>
                <SectionTitle>Photo Gallery</SectionTitle>
                <div className="row g-4">
                    <div className="col-md-4 mb-3">
                        <img src={h3} className="img-fluid rounded shadow-lg" alt="Restaurant" />
                    </div>
                    <div className="col-md-4 mb-3">
                        <img src={h4} className="img-fluid rounded shadow-lg" alt="Dish" />
                    </div>
                    <div className="col-md-4 mb-3">
                        <img src={h6} className="img-fluid rounded shadow-lg" alt="Event" />
                    </div>
                </div>
            </Section>

            <Section className="location-contact my-5 text-center" style={{color:"white", boxShadow:"0px 0px 20px aqua"}}>
                <SectionTitle>Location and Contact Information</SectionTitle>
                <p>123 Foodie St, Flavor Town, USA</p>
                <p>Email: info@restaurant.com | Phone: (123) 456-7890</p>
            </Section>

            <Section className="social-media my-5 text-center" style={{boxShadow:"0px 0px 20px aqua"}}>
                <SectionTitle>Follow Us</SectionTitle>
                <div>
                    <a href="https://facebook.com" className="me-3 text-info"><FontAwesomeIcon icon={faFacebook}style={{ fontSize: '4rem' , marginRight:"2rem"}} /></a>
                    <a href="https://instagram.com" className="me-3 text-info"><FontAwesomeIcon icon={faInstagram}style={{ fontSize: '4rem', marginRight:"2rem" }} /></a>
                    <a href="https://twitter.com" className="me-3 text-info"><FontAwesomeIcon icon={faTwitter}style={{ fontSize: '4rem' }} /></a>
                </div>
            </Section>

            <Section className="newsletter-subscription my-5 text-center" style={{boxShadow:"0px 0px 20px aqua"}}>
                <SectionTitle>Subscribe to Our Newsletter</SectionTitle>
                <form onSubmit={handleSubscribe}>
                    <div className="input-group mb-3 justify-content-center">
                        <input
                            type="email"
                            className="form-control bg-dark text-white border-info"
                            placeholder="Enter your email"
                            required
                            style={{ maxWidth: '300px' }}
                        />
                        <button
                            type="submit"
                            className="btn btn-info ms-2"
                            style={{ borderRadius: '25px' }}
                        >
                            Subscribe
                        </button>
                    </div>
                </form>
            </Section>
        </div>
    );

    function handleSubscribe(e) {
        e.preventDefault();
        const email = e.target[0].value;

        fetch('http://localhost:5000/api/userRoute/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        })
            .then((response) => response.json())
            .then((data) => {
                alert('Subscribed successfully!');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}; 
const Section = styled.section`
    background-color: #000000;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    &:hover {
        transform: translateY(-5px);
    }
`;

const SectionTitle = styled.h2`
    margin-bottom: 32px;
    font-size: 2rem;
    font-weight: 1000;
    color: #182433;
    background-color: aqua;
    border-radius: 40px;
`;

const Card = styled.div`
    background-color: #f8f9fa;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
`;

const CardBody = styled.div`
    padding: 20px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
`;

export default Home;
