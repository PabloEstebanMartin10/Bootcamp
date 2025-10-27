function IconoNotificaciones({ mensaje }: { mensaje: string }) {
	return <div>
		<img
			src="/../../../../../../../res/notification_icon.png"
		/>

		<p>{mensaje}</p>
	</div>;
}

export default IconoNotificaciones;
