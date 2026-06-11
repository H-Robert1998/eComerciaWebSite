import "./ContactConnectionMainSection.css";
import ContactConnectionMainSectionTittle from "./contactConnectionMainSectionTittle/ContactConnectionMainSectionTittle";
import ContactConnectionMainSectionInfo from "./contactConnectionMainSectionInfo/ContactConnectionMainSectionInfo";
import ContactConnectionMainSectionForm from "./contactConnectionMainSectionForm/ContactConnectionMainSectionForm";

function ContactConnectionMainSection() {
    return (
        <div className="contactConnectionMainSection_container">
            <ContactConnectionMainSectionTittle />
            <div className="contactConnectionMainSection_container_blok">
                <ContactConnectionMainSectionInfo />
                <ContactConnectionMainSectionForm />
            </div>
        </div>
    );
}
export default ContactConnectionMainSection;
