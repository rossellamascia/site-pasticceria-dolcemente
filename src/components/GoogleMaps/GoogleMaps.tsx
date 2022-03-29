export interface GoogleMapsProps {}
const GoogleMaps: React.FC<GoogleMapsProps> = () => {
  return (
    <section id="dove-siamo">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d179.2396714023385!2d10.052587448836329!3d44.04546905058967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d505611b83ee2f%3A0x3ac1772e3b68b270!2sPasticceria%20Dolcemente!5e0!3m2!1sit!2sit!4v1646234586374!5m2!1sit!2sit"
        width="100%"
        height="250"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
    </section>
  );
};
export default GoogleMaps;
