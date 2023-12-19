import Form from "../Utilities/Form";

export default function FooterSection() {
  return (
    <footer>
      <h3 className="footerHeader">Our Customers</h3>
      <div className="footerParagraphContainer">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          quibusdam, ratione temporibus laudantium accusamus placeat dolorem,
          voluptatibus nemo iure maxime nisi? Explicabo officiis exercitationem
          ipsa cum culpa sapiente cupiditate obcaecati.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          quibusdam, ratione temporibus laudantium accusamus placeat dolorem,
          voluptatibus nemo iure maxime nisi? Explicabo officiis exercitationem
          ipsa cum culpa sapiente cupiditate obcaecati.
        </p>
        <p>
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
            <div className="footerContactLeftLowerEmail"></div>
            <div className="footerContactLeftLowerPhone"></div>
            <div className="footerContactLeftLowerAdress"></div>
          </div>
        </div>
      </div>
      <Form />
    </footer>
  );
}
