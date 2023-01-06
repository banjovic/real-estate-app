import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.scss";
import ButtonW from "../components/Button/ButtonW";
import ButtonOutlined from "../components/Button/ButtonOutlined";
import Button from "../components/Button/Button";
import Searchbar from "../components/SearchBar/Searchbar";

import HomeIcon from "../assets/svg/house.svg";
import Room1 from "../assets/images/Room 1.png";
import Room2 from "../assets/images/Room 2.png";
import Room3 from "../assets/images/Room 3.png";
import Room4 from "../assets/images/Room 4.jpeg";
import LocationIcon from "../assets/svg/locationIcon.svg";
import BathTubIcon from "../assets/svg/bathtubIcon.svg";
import ToiletIcon from "../assets/svg/toiletIcon.svg";
import BedIcon from "../assets/svg/bedIcon.svg";
import MessageIcon from "../assets/svg/messageIcon.svg";
import MailIcon from "../assets/svg/mailIcon.svg";
import CallIcon from "../assets/svg/call-icon.svg";
import LoveIcon from "../assets/svg/loveIcon.svg";
import WalletIcon from "../assets/svg/walletIcon.svg";
import HandShakeIcon from "../assets/svg/handshakeIcon.svg";
import GoogleFitIcon from "../assets/svg/googleFitIcon.svg";
import Avatar1 from "../assets/avatar/Avatar_small_5.png";
import Avatar2 from "../assets/avatar/Avatar_small_3.png";
import Avatar3 from "../assets/avatar/Avatar_small_4.png";
import GreaterThanIcon from "../assets/svg/greaterThanIcon.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiFillCloseCircle,
  AiFillStar,
  AiOutlineStar,
  AiFillApple,
} from "react-icons/ai";
import ButtonOutlinedP from "../components/Button/ButtonOutlinedP";
import Picture1 from "../assets/images/Square image_4.png";
import Picture2 from "../assets/images/Square image_2.png";
import Picture3 from "../assets/images/Square image_1.png";
import AppleIcon from "../assets/svg/social-icons/icons8-apple-logo.svg";
import GooglePlayIcon from "../assets/svg/social-icons/icons8-google-play.svg";
import FacebookIcon from "../assets/svg/social-icons/icons8-facebook.svg";
import InstagramIcon from "../assets/svg/social-icons/icons8-instagram.svg";
import LinkedInIcon from "../assets/svg/social-icons/icons8-linkedin.svg";
import TwitterIcon from "../assets/svg/social-icons/icons8-twitter.svg";
import { IoIosArrowDropupCircle } from "react-icons/io";

export default function Home() {
  const router = useRouter();
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [scrollUp, setScrollUp] = useState<boolean>(false);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const onClickOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const onClickCloseDrawer = () => {
    setOpenDrawer(false);
  };

  // component for click-out listener
  const componentRef = useRef();

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
    function handleClick(e: any) {
      if (componentRef && componentRef.current) {
        const ref: any = componentRef.current;
        if (!ref.contains(e.target)) {
          setOpenDrawer(false);
        }
      }
    }
  }, []);

  // scroll to top
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 340) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>Real Estate App</title>
        <meta name="description" content="real estate app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles["nav"]}>
        <div className={styles["nav-icon"]}>
          <h1>Safe</h1>
          <span>H</span>
          <HomeIcon />
          <h1>ven</h1>
        </div>

        <ul className={styles["nav-options"]}>
          <li>Short Let</li>
          <li>For Rent</li>
          <li>Find Housemates</li>
          <li>Host Your Space</li>
        </ul>

        <div className={styles["nav-actions"]}>
          <ButtonW label="Sign Up" onClick={() => router.push("/signup")} />
          <ButtonOutlined
            label="Log In"
            onClick={() => router.push("/login")}
          />
        </div>

        <div className={styles["hamburger-part"]} ref={componentRef as any}>
          <GiHamburgerMenu onClick={onClickOpenDrawer} />

          {openDrawer && (
            <div className={styles["hamburger-menu"]}>
              <div className={styles["close-menu"]}>
                <AiFillCloseCircle onClick={onClickCloseDrawer} />
              </div>

              <div className={styles["menu-options-wrapper"]}>
                <ul className={styles["menu-options"]}>
                  <li>Short Let</li>
                  <li>For Rent</li>
                  <li>Find Housemates</li>
                  <li>Host Your Space</li>
                </ul>

                <div className={styles["responsive-nav-actions"]}>
                  <Button
                    label="Sign Up"
                    onClick={() => router.push("/signup")}
                  />
                  <ButtonOutlinedP
                    label="Log In"
                    onClick={() => router.push("/login")}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className={styles["main"]}>
        <section className={styles["hero-part"]}>
          <div className={styles["hero-content"]}>
            <h1>LOOKING FOR AN ACCOMMODATION?</h1>
            <div className={styles["hero-desc"]}>
              We have the best place for you.
            </div>
            <div className={styles["hero-actions"]}>
              <div>
                <Searchbar placeholder="Where do you want to live?" />
              </div>
              <div>
                <Button label="Search" />
              </div>
            </div>
          </div>
        </section>

        <section className={styles["first-section"]}>
          <div className={styles["desc-wrapper"]}>
            <h2>Short Let Accommodations</h2>
            <div>
              We provide 5 star luxury homes for short let purposes at a
              fraction of the cost of 5 star hotel rooms and everyone needs a
              place to get away, relax, stay on a business trip,holiday rental
              apartment, celebrate a birthday / event, do photoshoots or video
              shoots or just have a boys night or girls night in.
            </div>
          </div>

          <div className={styles["card-wrapper"]}>
            <div className={styles["single-card"]}>
              <div className={styles["card-main"]}>
                <Image src={Room1} alt="room" width={418} height={232} />

                <div className={styles["card-main-desc"]}>
                  <span className={styles["main-desc-title"]}>
                    Lara’s Luxury Shortlet Apartment
                  </span>
                  <p>NGN300,000 monthly.</p>
                  <span className={styles["desc-location"]}>
                    <LocationIcon />
                    Victoria Island, Lagos
                  </span>
                </div>
              </div>

              <div className={styles["card-footer"]}>
                <div className={styles["card-foot-desc"]}>
                  <div className={styles["foot-desc-up"]}>
                    <div>
                      <BathTubIcon />
                      <span>3</span> bathrooms/toilet
                    </div>

                    <div>
                      <BedIcon />
                      <span>3</span> bedrooms
                    </div>
                  </div>

                  <div className={styles["foot-desc-down"]}>
                    4.59 stars | <span>9 reviews</span>
                  </div>
                </div>

                <div className={styles["card-footnote"]}>
                  <div className={styles["footnote-up"]}>
                    <LoveIcon />
                    Add to favourites
                  </div>

                  <div className={styles["footnote-down"]}>
                    <div className={styles["details"]}>
                      <Image
                        src={Avatar1}
                        alt="avatar"
                        height={40}
                        width={40}
                      />
                      <span>Goodwin Uba</span>
                    </div>

                    <div className={styles["footnote-action"]}>
                      <div>
                        <CallIcon />
                        Call
                      </div>
                      <div>
                        <MessageIcon />
                        Message
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles["single-card"]}>
              <div className={styles["card-main"]}>
                <Image src={Room1} alt="room" width={418} height={232} />

                <div className={styles["card-main-desc"]}>
                  <span className={styles["main-desc-title"]}>
                    Lara’s Luxury Shortlet Apartment
                  </span>
                  <p>NGN300,000 monthly.</p>
                  <span className={styles["desc-location"]}>
                    <LocationIcon />
                    Victoria Island, Lagos
                  </span>
                </div>
              </div>

              <div className={styles["card-footer"]}>
                <div className={styles["card-foot-desc"]}>
                  <div className={styles["foot-desc-up"]}>
                    <div>
                      <BathTubIcon />
                      <span>3</span> bathrooms/toilet
                    </div>

                    <div>
                      <BedIcon />
                      <span>3</span> bedrooms
                    </div>
                  </div>

                  <div className={styles["foot-desc-down"]}>
                    4.59 stars | <span>9 reviews</span>
                  </div>
                </div>

                <div className={styles["card-footnote"]}>
                  <div className={styles["footnote-up"]}>
                    <LoveIcon />
                    Add to favourites
                  </div>

                  <div className={styles["footnote-down"]}>
                    <div className={styles["details"]}>
                      <Image
                        src={Avatar2}
                        alt="avatar"
                        height={40}
                        width={40}
                      />
                      <span>Rosemary Babs</span>
                    </div>

                    <div className={styles["footnote-action"]}>
                      <div>
                        <CallIcon />
                        Call
                      </div>
                      <div>
                        <MessageIcon />
                        Message
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles["single-card"]}>
              <div className={styles["card-main"]}>
                <Image src={Room1} alt="room" width={418} height={232} />

                <div className={styles["card-main-desc"]}>
                  <span className={styles["main-desc-title"]}>
                    Lara’s Luxury Shortlet Apartment
                  </span>
                  <p>NGN300,000 monthly.</p>
                  <span className={styles["desc-location"]}>
                    <LocationIcon />
                    Victoria Island, Lagos
                  </span>
                </div>
              </div>

              <div className={styles["card-footer"]}>
                <div className={styles["card-foot-desc"]}>
                  <div className={styles["foot-desc-up"]}>
                    <div>
                      <BathTubIcon />
                      <span>3</span> bathrooms/toilet
                    </div>

                    <div>
                      <BedIcon />
                      <span>3</span> bedrooms
                    </div>
                  </div>

                  <div className={styles["foot-desc-down"]}>
                    4.59 stars | <span>9 reviews</span>
                  </div>
                </div>

                <div className={styles["card-footnote"]}>
                  <div className={styles["footnote-up"]}>
                    <LoveIcon />
                    Add to favourites
                  </div>

                  <div className={styles["footnote-down"]}>
                    <div className={styles["details"]}>
                      <Image
                        src={Avatar1}
                        alt="avatar"
                        height={40}
                        width={40}
                      />
                      <span>Goodwin Uba</span>
                    </div>

                    <div className={styles["footnote-action"]}>
                      <div>
                        <CallIcon />
                        Call
                      </div>
                      <div>
                        <MessageIcon />
                        Message
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["first-section-pagination"]}>
            Swipe left to see more...{" "}
            <div>
              <GreaterThanIcon />
            </div>
            <div>
              <GreaterThanIcon />
            </div>
          </div>
        </section>

        <section className={styles["second-section"]}>
          <div className={styles["desc-wrapper"]}>
            <h2>Apartment Rentals</h2>
            <div>
              Porta sit neque ipsum cursus ultricies. Massa purus egestas at
              penatibus dictumst diam, malesuada nulla potenti. Malesuada vel
              aliquam aliquam massa. Felis, ornare tortor ultrices tincidunt.
              Velit faucibus neque tristique tincidunt at ornare. Ultricies
              tincidunt tincidunt habitant enim platea morbi.
            </div>
          </div>

          <div className={styles["card-wrapper"]}>
            <div className={styles["single-card"]}>
              <div className={styles["card-main"]}>
                <Image src={Room2} alt="room" width={418} height={232} />

                <div className={styles["card-main-desc"]}>
                  <span className={styles["main-desc-title"]}>
                    1-Room Self Contain Flat
                  </span>
                  <p>NGN150,000 monthly.</p>
                  <span className={styles["desc-location"]}>
                    <LocationIcon />
                    Oke Afa Isolo, Lagos.
                  </span>
                </div>
              </div>

              <div className={styles["card-footer"]}>
                <div className={styles["card-foot-desc"]}>
                  <div className={styles["foot-desc-up"]}>
                    <div>
                      <BathTubIcon />
                      <span>1</span> bathroom
                    </div>

                    <div>
                      <ToiletIcon />
                      <span>1</span> toilet
                    </div>
                  </div>
                </div>

                <div className={styles["card-footnote"]}>
                  <div className={styles["footnote-up"]}>
                    <LoveIcon />
                    Add to favourites
                  </div>

                  <div className={styles["footnote-down"]}>
                    <div className={styles["details"]}>
                      <Image
                        src={Avatar3}
                        alt="avatar"
                        height={40}
                        width={40}
                      />
                      <span>Jerry Banjo</span>
                    </div>

                    <div className={styles["footnote-action"]}>
                      <div>
                        <CallIcon />
                        Call
                      </div>
                      <div>
                        <MessageIcon />
                        Message
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles["single-card"]}>
              <div className={styles["card-main"]}>
                <Image src={Room4} alt="room" width={418} height={232} />

                <div className={styles["card-main-desc"]}>
                  <span className={styles["main-desc-title"]}>
                    1-Room Self Contain Flat
                  </span>
                  <p>NGN150,000 monthly.</p>
                  <span className={styles["desc-location"]}>
                    <LocationIcon />
                    Oke Afa Isolo, Lagos.
                  </span>
                </div>
              </div>

              <div className={styles["card-footer"]}>
                <div className={styles["card-foot-desc"]}>
                  <div className={styles["foot-desc-up"]}>
                    <div>
                      <BathTubIcon />
                      <span>1</span> bathroom
                    </div>

                    <div>
                      <ToiletIcon />
                      <span>1</span> toilet
                    </div>
                  </div>
                </div>

                <div className={styles["card-footnote"]}>
                  <div className={styles["footnote-up"]}>
                    <LoveIcon />
                    Add to favourites
                  </div>

                  <div className={styles["footnote-down"]}>
                    <div className={styles["details"]}>
                      <Image
                        src={Avatar2}
                        alt="avatar"
                        height={40}
                        width={40}
                      />
                      <span>Rosemary Babs</span>
                    </div>

                    <div className={styles["footnote-action"]}>
                      <div>
                        <CallIcon />
                        Call
                      </div>
                      <div>
                        <MessageIcon />
                        Message
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles["single-card"]}>
              <div className={styles["card-main"]}>
                <Image src={Room3} alt="room" width={418} height={232} />

                <div className={styles["card-main-desc"]}>
                  <span className={styles["main-desc-title"]}>
                    1-Room Self Contain Flat
                  </span>
                  <p>NGN150,000 monthly.</p>
                  <span className={styles["desc-location"]}>
                    <LocationIcon />
                    Oke Afa Isolo, Lagos.
                  </span>
                </div>
              </div>

              <div className={styles["card-footer"]}>
                <div className={styles["card-foot-desc"]}>
                  <div className={styles["foot-desc-up"]}>
                    <div>
                      <BathTubIcon />
                      <span>1</span> bathroom
                    </div>

                    <div>
                      <ToiletIcon />
                      <span>1</span> toilet
                    </div>
                  </div>
                </div>

                <div className={styles["card-footnote"]}>
                  <div className={styles["footnote-up"]}>
                    <LoveIcon />
                    Add to favourites
                  </div>

                  <div className={styles["footnote-down"]}>
                    <div className={styles["details"]}>
                      <Image
                        src={Avatar3}
                        alt="avatar"
                        height={40}
                        width={40}
                      />
                      <span>Jerry Banjo</span>
                    </div>

                    <div className={styles["footnote-action"]}>
                      <div>
                        <CallIcon />
                        Call
                      </div>
                      <div>
                        <MessageIcon />
                        Message
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["first-section-pagination"]}>
            Swipe left to see more...{" "}
            <div>
              <GreaterThanIcon />
            </div>
            <div>
              <GreaterThanIcon />
            </div>
          </div>
        </section>

        <section className={styles["third-section"]}>
          <div className={styles["desc-wrapper"]}>
            <h2>Find Housemates</h2>
            <div>
              Porta sit neque ipsum cursus ultricies. Massa purus egestas at
              penatibus dictumst diam, malesuada nulla potenti. Malesuada vel
              aliquam aliquam massa. Felis, ornare tortor ultrices tincidunt.
              Velit faucibus neque tristique tincidunt at ornare. Ultricies
              tincidunt tincidunt habitant enim platea morbi.
            </div>
          </div>

          <div className={styles["card-wrapper"]}>
            <div className={styles["single-card"]}>
              <WalletIcon />
              <h2>It is Affordable</h2>
              <div>
                Mauris in suspendisse ullamcorper sollicitudin. Tortor cursus
                fermentum enim lorem sapien porttitor dui. Id cras morbi turpis
                fringilla mauris et a nibh scelerisqut.
              </div>
            </div>

            <div className={styles["single-card"]}>
              <HandShakeIcon />
              <h2>It is convenient</h2>
              <div>
                Mauris in suspendisse ullamcorper sollicitudin. Tortor cursus
                fermentum enim lorem sapien porttitor dui. Id cras morbi turpis
                fringilla mauris et a nibh scelerisqut.
              </div>
            </div>

            <div className={styles["single-card"]}>
              <GoogleFitIcon />
              <h2>Find the best fit</h2>
              <div>
                Mauris in suspendisse ullamcorper sollicitudin. Tortor cursus
                fermentum enim lorem sapien porttitor dui. Id cras morbi turpis
                fringilla mauris et a nibh scelerisqut.
              </div>
            </div>
          </div>

          <div className={styles["first-section-pagination"]}>
            <Button label="Get Started Its Free!" />
          </div>
        </section>

        <section className={styles["fourth-section"]}>
          <div className={styles["part-one"]}>
            <h2>Host Your Space</h2>
            <div>
              Rhoncus ac at faucibus ut etiam ipsum scelerisque. Ac ut eros,
              massa ultricies. Est sit lobortis ultrices mattis mi vestibulum.
              Sapien faucibus gravida sollicitudin semper tincidunt maecenas.
              Interdum pharetra ultrices in blandit neque lectus volutpat elit.
              Etiam dui ac sed pharetra enim. Tristique aenean.
            </div>
            <div className={styles["part-one-action"]}>
              <ButtonW label="Sign Me Up!" />
            </div>
          </div>

          <div className={styles["part-two"]}></div>
        </section>

        <section className={styles["fifth-section"]}>
          <div className={styles["fifth-section-desc"]}>
            <h2>Don’t take just our word for it</h2>
            <span>Read what our users are saying.</span>
          </div>

          <div className={styles["card-wrapper"]}>
            <div className={styles["single-card"]}>
              <div className={styles["top-card-content"]}>
                Id tempus est mattis sollicitudin egestas fusce. Non interdum
                tellus, id nisi morbi neque, purus. Ut facilisis at velit porta
                sed. Turpis euismod aliquet ultrices morbi nec amet. Suscipit
                auctor venenatis at tempor varius pretium aliquet.
              </div>

              <div className={styles["bottom-card-content"]}>
                <Image src={Picture1} alt="picture" height={72} width={72} />

                <div className={styles["bottom-card-details"]}>
                  <div className={styles["bottom-card-ratings"]}>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </div>

                  <div className={styles["bottom-card-title"]}>
                    Abraham Jones
                  </div>
                </div>
              </div>
            </div>

            <div className={styles["single-card"]}>
              <div className={styles["top-card-content"]}>
                Id tempus est mattis sollicitudin egestas fusce. Non interdum
                tellus, id nisi morbi neque, purus. Ut facilisis at velit porta
                sed. Turpis euismod aliquet ultrices morbi nec amet. Suscipit
                auctor venenatis at tempor varius pretium aliquet.
              </div>

              <div className={styles["bottom-card-content"]}>
                <Image src={Picture2} alt="picture" height={72} width={72} />

                <div className={styles["bottom-card-details"]}>
                  <div className={styles["bottom-card-ratings"]}>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>

                  <div className={styles["bottom-card-title"]}>Janet Doe</div>
                </div>
              </div>
            </div>

            <div className={styles["single-card"]}>
              <div className={styles["top-card-content"]}>
                Id tempus est mattis sollicitudin egestas fusce. Non interdum
                tellus, id nisi morbi neque, purus. Ut facilisis at velit porta
                sed. Turpis euismod aliquet ultrices morbi nec amet. Suscipit
                auctor venenatis at tempor varius pretium aliquet.
              </div>

              <div className={styles["bottom-card-content"]}>
                <Image src={Picture3} alt="picture" height={72} width={72} />

                <div className={styles["bottom-card-details"]}>
                  <div className={styles["bottom-card-ratings"]}>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiOutlineStar />
                  </div>

                  <div className={styles["bottom-card-title"]}>
                    Lola Okunrin
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles["sixth-section"]}>
          <h2>Join our online conversations</h2>
          <div>
            Interdum in in sed tortor, ut vulputate phasellus. Pellentesque ut
            maecenas phasellus neque. Risus ut vestibulum nulla semper lectus.
            Pretium, velit consectetur viverra sit consectetur eu senectus urna
            eget. Proin in tellus id euismod odio fermentum gravida
            sollicitudin. Nunc augue in id quis a.
          </div>

          <div className={styles["social-icons"]}>
            <InstagramIcon />
            <LinkedInIcon />
            <FacebookIcon />
            <TwitterIcon />
          </div>
        </section>

        {scrollUp && (
          <div onClick={goToTop} className={styles["backToTop"]}>
            <IoIosArrowDropupCircle />
          </div>
        )}
      </main>

      <footer className={styles["footer"]}>
        <section className={styles["footer-section-one"]}>
          <div className={styles["nav-icon"]}>
            <h1>Safe</h1>
            <span>H</span>
            <HomeIcon />
            <h1>ven</h1>
          </div>

          <ul className={styles["nav-options"]}>
            <li>Short Let</li>
            <li>For Rent</li>
            <li>Find Housemates</li>
            <li>Host Your Space</li>
          </ul>
        </section>

        <section className={styles["footer-section-two"]}>
          <div className={styles["footer-up-section"]}>
            <div className={styles["footer-up-part1"]}>
              <div className={styles["footer-up-part1-actions"]}>
                <div className={styles["apple-div"]}>
                  <div className={styles["apple-icon"]}>
                    <AiFillApple />
                  </div>

                  <div>
                    <span>Download on the</span>
                    <p>App Store</p>
                  </div>
                </div>

                <div className={styles["google-play-div"]}>
                  <GooglePlayIcon />
                  <div>
                    <span>Get it on</span>
                    <p>Google Play</p>
                  </div>
                </div>
              </div>

              <div className={styles["footer-up-part1-details"]}>
                <div>Find accommodation on the go.</div>
                <span>Download our Mobile App</span>
              </div>
            </div>

            <div className={styles["footer-up-part2"]}>
              <h3>Popular Shortlet Cities</h3>
              <ul>
                <li>Ikoyi</li>
                <li>Portharcourt</li>
                <li>Calabar</li>
                <li>Awka</li>
                <li>Abeokuta</li>
                <li>Victoria Island</li>
                <li>Enugu</li>
              </ul>
            </div>

            <div className={styles["footer-up-part3"]}>
              <h3>Popular States</h3>

              <ul>
                <li>Lagos</li>
                <li>Abuja</li>
                <li>Enugu</li>
                <li>Rivers</li>
                <li>Cross-River</li>
                <li>Oyo</li>
                <li>Akwa Ibom</li>
              </ul>
            </div>

            <div className={styles["footer-up-part4"]}>
              <h3>Contact Us</h3>

              <div className={styles["footer-up-part4-details"]}>
                <div>
                  <CallIcon />
                  <div>+2347066048100</div>
                </div>

                <div>
                  <MailIcon />
                  <div>info@safehaven.com</div>
                </div>

                <div className={styles["social-icons"]}>
                  <InstagramIcon />
                  <LinkedInIcon />
                  <FacebookIcon />
                  <TwitterIcon />
                </div>
              </div>
            </div>
          </div>

          <div className={styles["footer-down-section"]}>
            © 2021. Safe Haven All rights reserved. Privacy Policy | Cookies
            Policy
          </div>
        </section>
      </footer>
    </>
  );
}
