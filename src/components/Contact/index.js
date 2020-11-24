import React from "react";
import { Form } from "react-bootstrap";

function Contact() {
    return (
        <div class="container" style={{ maxWidth: "20rem", paddingTop: "70px" }}>
            <div class="card text-center bg-light mb-3" style={{ width: "18rem" }}>
                <div class="card-body">
                    <h2>Contact</h2>
                    <hr />
                    <Form>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Name</label>
                            <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="name" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@email.com" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="This form is for display only"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </Form>
                </div>
            </div>
        </div>    
    )
}

export default Contact;