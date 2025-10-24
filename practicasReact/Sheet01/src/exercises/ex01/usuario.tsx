interface usuarioProps {
	nombre: string;
	edad?: number;
}

const Usuario: React.FC<{ user: usuarioProps }> = ({ user }) => {
	return (
		<div>
			<h1>
				Nombre: {user.nombre} (Edad{user.edad ? ": "+user.edad : "no disponible"})
			</h1>
		</div>
	);
};
export default Usuario;
