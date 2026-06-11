import "./ContactConnectionMainSectionForm.css";

function ContactConnectionMainSectionForm() {
    return (
        <div className="ContactConnectionMainSectionForm_container">
            <div className="ContactConnectionMainSectionForm_container_blok">
                <p>Your name</p>
                <input type="text" placeholder="Abc" />
                <p>Email address</p>
                <input type="text" placeholder="Abc@def.com" />
                <p>Subject</p>
                <input type="text" placeholder="This is an optional" />
                <p>Message</p>
                <input type="text" placeholder="Hi! i’d like to ask about" />
                <div className="ContactConnectionMainSectionForm_container_blok_btnSubmit">
                    Submit
                </div>
            </div>
        </div>
    );
}
export default ContactConnectionMainSectionForm;
