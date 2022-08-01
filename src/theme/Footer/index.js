import React from "react";
//import Footer from '@theme-original/Footer';

export default function FooterWrapper(props) {
  return (
    <>
      <footer class="footer">
        <div class="container container--fluid">
          <div class="row footer__links">
            <div class="col footer__col">
              <h4 class="footer__title">View</h4>
              <ul class="footer__items">
                <li class="footer__item">
                  <a
                    class="footer__link-item"
                    href="https://armada-alliance.com/"
                  >
                    Website
                  </a>
                </li>
                <li class="footer__item">
                  <a class="footer__link-item" href="#url">
                    Docs
                  </a>
                </li>
                <li class="footer__item">
                  <a
                    class="footer__link-item"
                    href="https://www.youtube.com/channel/UCligunhcmbMYaBUMvONsKwg"
                  >
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
            <div class="col footer__col">
              <h4 class="footer__title">Community</h4>
              <ul class="footer__items">
                <li class="footer__item">
                  <a class="footer__link-item" href="#url">
                    Users
                  </a>
                </li>
                <li class="footer__item">
                  <a
                    class="footer__link-item"
                    href="https://armada-alliance.com/stake-pools"
                  >
                    Stake Pools
                  </a>
                </li>
                <li class="footer__item">
                  <a
                    class="footer__link-item"
                    href="https://github.com/armada-alliance/"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div class="col footer__col">
              <h4 class="footer__title">Social</h4>
              <ul class="footer__items">
                <li class="footer__item">
                  <a
                    class="footer__link-item"
                    href="https://t.me/joinchat/FeKTCBu-pn5OUZUz4joF2w"
                  >
                    Telegram
                  </a>
                </li>
                <li class="footer__item">
                  <a
                    class="footer__link-item"
                    href="https://twitter.com/alliance_armada"
                  >
                    Twitter
                  </a>
                </li>
                <li class="footer__item">
                  <a
                    class="footer__link-item"
                    href="https://discord.com/invite/Sqc398qk5a"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div class="col footer__col">
              <h4 class="footer__title">More</h4>
              <ul class="footer__items">
                <li class="footer__item">
                  <a
                    class="footer__link-item"
                    href="https://cardano.ideascale.com/c/idea/397744"
                  >
                    Project Catalyst
                  </a>
                </li>
                <li class="footer__item">
                  <a
                    class="footer__link-item"
                    href="https://armada-alliance.com/blogs"
                  >
                    Blog
                  </a>
                </li>
                <li class="footer__item">
                  <a
                    class="footer__link-item"
                    href="https://cointr.ee/armada-alliance"
                  >
                    Donate
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="text--center">
            <div class="margin-bottom--sm">
              <img
                class="footer__logo"
                alt="Armada Alliance Logo"
                src="./img/armada-alliance-logo.png"
                style={{ height: "100px", width: "100px" }}
              />
            </div>
            Copyright © {new Date().getFullYear()} Armada Alliance.
          </div>
        </div>
      </footer>
    </>
  );
}
