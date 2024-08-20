import "../styles/header.css";

const Header = ({ className = null }) => {
	return (
		<header {...(className && { className })}>
			<div id="logo">Aqui va el logo</div>
			<nav>
				<ul>
					<li>Inicio</li>
					<li>Realiza tu reserva</li>
					<li>Dar de alta tu negocio</li>
				</ul>
			</nav>
			<div id="meta">
				<button type="button">
					<span>Usuario</span>
				</button>
			</div>
		</header>
	);
};

export default Header;
