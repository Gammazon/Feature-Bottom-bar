import React, { Component } from "react";

const App = props => {
  const linkedIn = name => {
    if (name === "Matt") {
      location.href = "https://www.linkedin.com/in/matthew-lucas/";
    }
    if (name === "Sam") {
      location.href = "https://www.linkedin.com/in/sam-lawson-a822083b/";
    }
    if (name === "Kytra") {
      location.href = "https://www.linkedin.com/in/kytra-murphree-14415218b/";
    }
    if (name === "Ben") {
      location.href = "https://www.linkedin.com/in/bhong35/";
    }
    if (name === "Tim") {
      location.href = "https://www.linkedin.com/in/tim-sanderson-55b6b0197/";
    }
  };
  return (
    <div>
      <div className="backToTop">Back to top</div>
      <div className="bottomBar1">
        <table className="topTable1">
          <tr>
            <th>Get to Know us</th>
          </tr>
          <tr>
            <td>Work on amazon</td>
          </tr>
          <tr>
            <td>Blog</td>
          </tr>
          <tr>
            <td>About Amazon</td>
          </tr>
          <tr>
            <td>Press releases</td>
          </tr>
          <tr>
            <td>Investor Relations</td>
          </tr>
          <tr>
            <td>Amazon devices</td>
          </tr>
          <tr>
            <td>Visit Amazon</td>
          </tr>
        </table>
        <table className="topTable2">
          <tr>
            <th>Make money with us</th>
          </tr>
          <tr>
            <td>Sell on Amazon</td>
          </tr>
          <tr>
            <td>Sell on Amazon Accelerator</td>
          </tr>
          <tr>
            <td>Sell on Amazon Handmade</td>
          </tr>
          <tr>
            <td>Sell your services on Amazon</td>
          </tr>
          <tr>
            <td>Sell on Amazon Business</td>
          </tr>
          <tr>
            <td>Sell your Apps on Amazon</td>
          </tr>
          <tr>
            <td>Affiliate program</td>
          </tr>
          <tr>
            <td>Advertise your products</td>
          </tr>
          <tr>
            <td>Publish your book on Kindle</td>
          </tr>
          <tr>
            <td>See more</td>
          </tr>
        </table>
        <table className="topTable3">
          <tr>
            <th>Amazon Payment Products</th>
          </tr>
          <tr>
            <td>Amazon Rewards Visa Signature Cards</td>
          </tr>
          <tr>
            <td>Amazon.com Store Card</td>
          </tr>
          <tr>
            <td>Amazon.com Corporate Credit Line</td>
          </tr>
          <tr>
            <td>Purchase with points</td>
          </tr>
          <tr>
            <td>Credit card</td>
          </tr>
          <tr>
            <td>Top up your balance</td>
          </tr>
          <tr>
            <td>Amazon Currency Converter</td>
          </tr>
        </table>
        <table className="topTable4">
          <tr>
            <th>Let Us Help You</th>
          </tr>
          <tr>
            <td>Your account</td>
          </tr>
          <tr>
            <td>Your orders</td>
          </tr>
          <tr>
            <td>Shipping Rates and Policies</td>
          </tr>
          <tr>
            <td>Amazon Prime</td>
          </tr>
          <tr>
            <td>Returns and Replacements</td>
          </tr>
          <tr>
            <td>Manage devices</td>
          </tr>
          <tr>
            <td>Amazon Assistant</td>
          </tr>
          <tr>
            <td>Help</td>
          </tr>
        </table>
      </div>
      <div id="buffer1"></div>
      <div className="hr"></div>
      <div id="spanish">
        <span className="container">
          <span id="Gammazon">GAMMAZON</span>
          <button id="language">English</button>
          <button id="country">United States</button>
        </span>
      </div>
      <div className="bottomBar2">
        <table className="bottomTable">
          <tr>
            <td>
              Amazon Music <br />
              <span class="extra">Stream millions of songs</span>{" "}
            </td>
            <td>
              Amazon Advertising <br />
              <span class="extra">
                Find, attract, and engage customers
              </span>{" "}
            </td>
            <td>
              Amazon Drive
              <br />
              <span class="extra">Cloud storage from Amazon</span>{" "}
            </td>
            <td>
              6pm <br />
              <span class="extra">Score deals on fashion brands</span>{" "}
            </td>
            <td>
              AbeBooks <br />
              <span class="extra">Books, art & collectibles</span>{" "}
            </td>
            <td>
              ACX <br />
              <span class="extra">Audiobook Publishing Made Easy</span>{" "}
            </td>
            <td>
              Alexa <br />
              <span class="extra">Actionable Analytics for the Web</span>{" "}
            </td>
          </tr>
          <tr>
            <td>
              Amazon Business <br />
              <span class="extra">Everything For Your Business</span>{" "}
            </td>
            <td>
              Amazon Fresh <br />
              <span class="extra">
                Groceries & More Right To Your Door
              </span>{" "}
            </td>
            <td>
              AmazonGlobal <br />
              <span class="extra">Ships Orders Internationally</span>{" "}
            </td>
            <td>
              Home Services
              <br />
              <span class="extra">
                Handpicked Pros Happiness Guarantee
              </span>{" "}
            </td>
            <td>
              Amazon Ignite <br />
              <span class="extra">
                Sell your original Digital Educational Resources
              </span>{" "}
            </td>
            <td>
              Amazon Rapids <br />
              <span class="extra">Fun stories for kids on the go</span>{" "}
            </td>
            <td>
              Amazon Web Services <br />
              <span class="extra">Scalable Cloud Computing Services</span>{" "}
            </td>
          </tr>
          <tr>
            <td>
              Audible <br />
              <span class="extra">
                Listen to Books & Original Audio Performances
              </span>{" "}
            </td>
            <td>
              Book Depository <br />
              <span class="extra">Books With Free Delivery Worldwide</span>{" "}
            </td>
            <td>
              Box Office Mojo <br />
              <span class="extra">Find Movie Box Office Data</span>{" "}
            </td>
            <td>
              ComiXology <br />
              <span class="extra">Thousands of Digital Comics</span>{" "}
            </td>
            <td>
              CreateSpace <br />
              <span class="extra">Indie Print Publishing Made Easy</span>{" "}
            </td>
            <td>
              DPReview
              <br />
              <span class="extra">Digital Photography</span>{" "}
            </td>
            <td>
              East Dane <br />
              <span class="extra">Designer Men's Fashion</span>{" "}
            </td>
          </tr>
          <tr>
            <td>
              Amazon Music <br />
              <span class="extra">Stream millions of songs</span>{" "}
            </td>
            <td>
              Amazon Advertising <br />
              <span class="extra">
                Find, attract, and engage customers
              </span>{" "}
            </td>
            <td>
              Amazon Drive
              <br />
              <span class="extra">Cloud storage from Amazon</span>{" "}
            </td>
            <td>
              6pm <br />
              <span class="extra">Score deals on fashion brands</span>{" "}
            </td>
            <td>
              AbeBooks <br />
              <span class="extra">Books, art & collectibles</span>{" "}
            </td>
            <td>
              ACX <br />
              <span class="extra">Audiobook Publishing Made Easy</span>{" "}
            </td>
            <td>
              Alexa <br />
              <span class="extra">Actionable Analytics for the Web</span>{" "}
            </td>
          </tr>
          <tr>
            <td>
              Amazon Business <br />
              <span class="extra">Everything For Your Business</span>{" "}
            </td>
            <td>
              Amazon Fresh <br />
              <span class="extra">
                Groceries & More Right To Your Door
              </span>{" "}
            </td>
            <td>
              AmazonGlobal <br />
              <span class="extra">Ships Orders Internationally</span>{" "}
            </td>
            <td>
              Home Services
              <br />
              <span class="extra">
                Handpicked Pros Happiness Guarantee
              </span>{" "}
            </td>
            <td>
              Amazon Ignite <br />
              <span class="extra">
                Sell your original Digital Educational Resources
              </span>{" "}
            </td>
            <td>
              Amazon Rapids <br />
              <span class="extra">Fun stories for kids on the go</span>{" "}
            </td>
            <td>
              Amazon Web Services <br />
              <span class="extra">Scalable Cloud Computing Services</span>{" "}
            </td>
          </tr>
          <tr>
            <td>
              Audible <br />
              <span class="extra">
                Listen to Books & Original Audio Performances
              </span>{" "}
            </td>
            <td>
              Book Depository <br />
              <span class="extra">Books With Free Delivery Worldwide</span>{" "}
            </td>
            <td>
              Box Office Mojo <br />
              <span class="extra">Find Movie Box Office Data</span>{" "}
            </td>
            <td>
              ComiXology <br />
              <span class="extra">Thousands of Digital Comics</span>{" "}
            </td>
            <td>
              CreateSpace <br />
              <span class="extra">Indie Print Publishing Made Easy</span>{" "}
            </td>
            <td>
              DPReview
              <br />
              <span class="extra">Digital Photography</span>{" "}
            </td>
            <td>
              East Dane <br />
              <span class="extra">Designer Men's Fashion</span>{" "}
            </td>
          </tr>
        </table>
      </div>
      <div id="theEnd">
        <table id="conditions">
          <tr>
            <th
              onClick={() => {
                location.replace("https://www.linkedin.com/in/matthew-lucas/");
              }}
            >
              Contact Matt Lucas
            </th>
            <th
              onClick={function() {
                return linkedIn("Ben");
              }}
            >
              Contact Benjamin Hong
            </th>
            <th
              onClick={function() {
                return linkedIn("Kytra");
              }}
            >
              Contact Kytra Murphree
            </th>
            <th
              onClick={function() {
                return linkedIn("Tim");
              }}
            >
              Contact Tim Sanderson
            </th>
            <th
              onClick={function() {
                return linkedIn("Sam");
              }}
            >
              Contact Sam Lawson
            </th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default App;
