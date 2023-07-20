import * as React from "react";
import * as Toast from "@radix-ui/react-toast";

const ToastDemo = ({ setOpens, opens, eventDateRef, timerRef }) => {
  // const [open, setOpen] = React.useState(false);
  // const eventDateRef = React.useRef(new Date());
  // const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <Toast.Provider swipeDirection="right">
      {/* <button
        className="Button large violet"
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timerRef.current);
          timerRef.current = window.setTimeout(() => {
            eventDateRef.current = oneWeekAway();
            setOpen(true);
          }, 100);
        }}
      >
        Add to calendar
      </button> */}

      <Toast.Root className="ToastRoot" open={opens} onOpenChange={setOpens}>
        <Toast.Title className="ToastTitle">
          Submitted Form Format was not correct
        </Toast.Title>
        <Toast.Description asChild>
          Fields like product name , manfacture , manfacture number are required
        </Toast.Description>
        <Toast.Action
          className="ToastAction"
          asChild
          altText="Goto schedule to undo"
        >
          <button className="Button small green">Okay</button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="ToastViewport" />
    </Toast.Provider>
  );
};

function oneWeekAway(date) {
  const now = new Date();
  const inOneWeek = now.setDate(now.getDate() + 7);
  return new Date(inOneWeek);
}

function prettyDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(date);
}

export default ToastDemo;
