import Head from "next/head";
import Image from "next/image";

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
import CallIcon from "../assets/svg/call-icon.svg";
import LoveIcon from "../assets/svg/loveIcon.svg";
import WalletIcon from "../assets/svg/walletIcon.svg";
import HandShakeIcon from "../assets/svg/handshakeIcon.svg";
import GoogleFitIcon from "../assets/svg/googleFitIcon.svg";
import Avatar1 from "../assets/avatar/Avatar_small_5.png";
import Avatar2 from "../assets/avatar/Avatar_small_3.png";
import Avatar3 from "../assets/avatar/Avatar_small_4.png";
import GreaterThanIcon from "../assets/svg/greaterThanIcon.svg";

export default function Home() {
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

        <ul>
          <li>Short Let</li>
          <li>For Rent</li>
          <li>Find Housemates</li>
          <li>Host Your Space</li>
        </ul>

        <div className={styles["nav-actions"]}>
          <ButtonW label="Sign Up" />
          <ButtonOutlined label="Log In" />
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
              <Searchbar placeholder="Where do you want to live?" />
              <Button label="Search" />
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

        <section></section>

        <section></section>

        <section></section>
      </main>
    </>
  );
}
