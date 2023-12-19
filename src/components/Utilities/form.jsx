const Form = () => {
    return (
        <form>
            <input type="text" id="formname" name="formname" placeholder="Name"/>
            <input type="text" id="formemailadress" name="formemailadress" placeholder="E-Mail"/>
            <input type="text" id="formphonenumber" name="formphonenumber" placeholder="Phone Number"/>
            <textarea type="" id="formmessage" name="formmessage" placeholder="Message"></textarea>
        </form>
    );
}

export default Form