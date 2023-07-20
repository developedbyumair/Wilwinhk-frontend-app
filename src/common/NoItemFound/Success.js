import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

function Success({ message }) {
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button className="Button violet">Delete account</button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="AlertDialogOverlay" />
        <AlertDialog.Content className="AlertDialogContent">
          <AlertDialog.Title className="AlertDialogTitle">
            Try Again
          </AlertDialog.Title>
          <AlertDialog.Description className="AlertDialogDescription">
            The Uploaded File is not Formatted
          </AlertDialog.Description>
          <div style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}>
            <AlertDialog.Action asChild>
              <button className="Button red">Close</button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}

export default Success;
