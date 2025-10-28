import { useEffect } from "react";

function RoomStatus({ roomID }: { roomID: String }) {
	useEffect(() => {
		console.log("connecting to room: ", { roomID });
		setTimeout(() => {
			console.log("conected to room: ", { roomID });
		}, 2000);
		return ()=>console.log("disconected from room: ", { roomID });
	}, [roomID]);
	return <></>;
}
export default RoomStatus;
