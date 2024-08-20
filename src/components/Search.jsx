import { useState } from "react";
import "../styles/search.css";

const DROPDOWN_ID = {
	CITIES: "cities",
	ESTABLISHMENTS: "establishments",
};

const Search = () => {
	const [isCitiesOpen, setIsCitiesOpen] = useState(false);
	const [isEstablishmentsOpen, setIsEstablishmentsOpen] = useState(false);

	const toggleDropdown = (id) => {
		setIsCitiesOpen((prevIsCitiesOpen) =>
			Boolean(id === DROPDOWN_ID.CITIES && !prevIsCitiesOpen),
		);
		setIsEstablishmentsOpen((prevIsEstablishmentsOpen) =>
			Boolean(id === DROPDOWN_ID.ESTABLISHMENTS && !prevIsEstablishmentsOpen),
		);
	};

	return (
		<div id="configure-search">
			<div id="city" {...(isCitiesOpen && { className: "open" })}>
				<span>Ciudad</span>
				<button
					type="button"
					onClick={() => toggleDropdown(DROPDOWN_ID.CITIES)}
				>
					Selecciona una ciudad
				</button>
				<ul className="dropdown_menu">
					<li className="item-1">Novelda</li>
					<li className="item-2">Alicante</li>
					<li className="item-3">Aspe</li>
				</ul>
			</div>
			<div
				id="establishments"
				{...(isEstablishmentsOpen && { className: "open" })}
			>
				<span>Establecimiento</span>
				<button
					type="button"
					onClick={() => toggleDropdown(DROPDOWN_ID.ESTABLISHMENTS)}
				>
					Selecciona un establecimiento
				</button>
				<ul className="dropdown_menu">
					<li className="item-1">Novelda</li>
					<li className="item-2">Alicante</li>
					<li className="item-3">Aspe</li>
				</ul>
			</div>
			<div id="search">
				<button type="button" id="search">
					Search
				</button>
			</div>
		</div>
	);
};

export default Search;

/**
 * Código para crear la animaciónd el dropdown dinámicamente
 * <div class="item" id="item-1"></div>
<div class="item" id="item-2"></div>
<div class="item" id="item-3"></div>

<style>
  .item {
    width: 100px;
    height: 100px;
    background-color: blue;
    animation: rotateZ 300ms ease-in-out forwards;
  }

  @keyframes rotateZ {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(360deg);
    }
  }
</style>

<script>
  const items = document.querySelectorAll('.item');
  items.forEach((item, index) => {
    item.style.animationDelay = `${index * 60}ms`;
  });
</script>

 */
