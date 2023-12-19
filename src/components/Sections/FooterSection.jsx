import Form from "../Utilities/Form";

export default function FooterSection() {
  return (
    <footer className="footer">
      <h3 className="footerHeader text-xl text-center mb-10 text-darkgreen">Our Customers</h3>
      <div className="footerParagraphContainer flex justify-around">
        <p className="flex-wrap mx-6 text-center max-w-xs">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          quibusdam, ratione temporibus laudantium accusamus placeat dolorem,
          voluptatibus nemo iure maxime nisi? Explicabo officiis exercitationem
          ipsa cum culpa sapiente cupiditate obcaecati.
        </p>
        <p className="flex-wrap mx-6 text-center max-w-xs">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          quibusdam, ratione temporibus laudantium accusamus placeat dolorem,
          voluptatibus nemo iure maxime nisi? Explicabo officiis exercitationem
          ipsa cum culpa sapiente cupiditate obcaecati.
        </p>
        <p className="flex-wrap mx-6 text max-w-xs">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          quibusdam, ratione temporibus laudantium accusamus placeat dolorem,
          voluptatibus nemo iure maxime nisi? Explicabo officiis exercitationem
          ipsa cum culpa sapiente cupiditate obcaecati.
        </p>
      </div>
      <div className="footerContactMiddleSplit">
        <div className="footerContactLeft">
          <div className="footerContactLeftUpper">
            <h3>Contact Us</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              maxime tenetur omnis iusto exercitationem in, veritatis molestias
              officiis accusamus unde sapiente quibusdam laboriosam aperiam
              voluptate, nisi velit quo excepturi laudantium.
            </p>
          </div>
          <div className="footerContactLeftLower">
            <div className="footerContactLeftLowerEmail">
              <div className="footerGreenIconBall"></div>
              <div className="footerEmailContainer"><p className="footerEmailFontBold">Email</p><p></p></div>
            </div>
            <div className="footerContactLeftLowerPhone">
              <div className="footerGreenIconBall"></div>
              <div className="footerEmailContainer"><p>Phone</p><p></p></div>
            </div>
            <div className="footerContactLeftLowerAdress">
              <div className="footerGreenIconBall"></div>
              <div className="footerEmailContainer"><p>Address</p><p></p></div>
            </div>
          </div>
        </div>
      </div>
      <Form />
    </footer>
  );
}
