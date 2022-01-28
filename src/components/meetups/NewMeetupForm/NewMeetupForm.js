import classes from "./NewMeetupForm.module.css";
import Card from "../../ui/Card/Card";
import { useRef } from "react";

function NewMeetupForm() {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressRef = useRef();
  const descRef = useRef();

  function onSubmitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const eneteredImg = imageInputRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredDesc = descRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: eneteredImg,
      address: enteredAddress,
      description: enteredDesc
    }
    console.log(meetupData)
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea rows="5" required id="description" ref={descRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
