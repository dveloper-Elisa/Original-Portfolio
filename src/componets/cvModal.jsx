/* eslint-disable react/prop-types */
import "./cvModal.css";

const CV_URL = "https://drive.google.com/file/d/11aqkK8lmJS3JkrBvpCgTfe4ooJXbezmZ/preview";

const CvModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="cv-modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section className="cv-modal" role="dialog" aria-modal="true" aria-label="Elisa Kwizera CV" onMouseDown={(event) => event.stopPropagation()}>
        <header><div><span className="eyebrow">Curriculum vitae</span><h2>Elisa Kwizera</h2></div><button onClick={onClose} aria-label="Close CV"><i className="fa fa-times" /></button></header>
        <iframe title="Elisa Kwizera CV" src={CV_URL} allow="autoplay" />
      </section>
    </div>
  );
};

export default CvModal;
