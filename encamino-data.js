// CONFÍN — En Camino: Rutas escénicas y pasos fronterizos
// Archivo separado para mantener el index liviano
// Se carga dinámicamente en view-dest-ar

const ENCAMINO_HTML = `
<div class="encamino-section" id="encamino-ar">
<div class="encamino-header">
<div class="encamino-titulo" data-es="En Camino" data-en="On the Road" data-pt="Na Estrada">En Camino</div>
<div class="encamino-subtitulo" data-es="Rutas escénicas · Paradas recomendadas" data-en="Scenic routes · Recommended stops" data-pt="Rotas cênicas · Paradas recomendadas">Rutas escénicas · Paradas recomendadas</div>
</div>
<div id="mapa-rutas" style="height:200px;margin:0 16px 16px;border-radius:10px;overflow:hidden;border:1px solid rgba(61,107,115,0.2);"></div>
<div class="ruta-card" onclick="this.classList.toggle('abierto')">
<div class="ruta-card-header">
<div class="ruta-card-header-left">
<div class="ruta-nombre" data-es="Ruta de los 7 Lagos — RN 40" data-en="7 Lakes Route — RN 40" data-pt="Rota dos 7 Lagos — RN 40">Ruta de los 7 Lagos — RN 40</div>
<div class="ruta-tramo" data-es="San Martín de los Andes ↔ Villa La Angostura / Bariloche" data-en="San Martín de los Andes ↔ Villa La Angostura / Bariloche" data-pt="San Martín de los Andes ↔ Villa La Angostura / Bariloche">San Martín de los Andes ↔ Villa La Angostura / Bariloche</div>
<div class="ruta-meta">
<span class="ruta-badge">110 km</span>
<span class="ruta-badge" data-es="5 paradas" data-en="5 stops" data-pt="5 paradas">5 paradas</span>
<span class="ruta-badge" data-es="Asfalto" data-en="Paved road" data-pt="Asfalto">Asfalto</span>
</div>
</div>
<span class="ruta-arrow">▾</span>
</div>
<div class="ruta-body">
<div class="ruta-camino-aviso" data-es="⚠️ Portación obligatoria de cadenas en invierno · Verificar estado de ruta antes de salir" data-en="⚠️ Snow chains required in winter · Check road status before leaving" data-pt="⚠️ Correntes de neve obrigatórias no inverno · Verifique o estado da estrada antes de sair">⚠️ Portación obligatoria de cadenas en invierno · Verificar estado de ruta antes de salir</div>
<div class="parada">
<div class="parada-km">km 5</div>
<div class="parada-linea"><div class="parada-dot"></div><div class="parada-stem"></div></div>
<div class="parada-content">
<div class="parada-nombre" data-es="Mirador del Arroyo Partido" data-en="Arroyo Partido Viewpoint" data-pt="Mirante do Arroyo Partido">Mirador del Arroyo Partido</div>
<div class="parada-tipo" data-es="📍 Curiosidad geográfica" data-en="📍 Geographic curiosity" data-pt="📍 Curiosidade geográfica">📍 Curiosidad geográfica</div>
<div class="parada-desc" data-es="El arroyo se divide en dos brazos: uno fluye al Pacífico y el otro al Atlántico." data-en="The stream splits in two: one flows to the Pacific and the other to the Atlantic." data-pt="O arroio se divide em dois braços: um flui para o Pacífico e o outro para o Atlântico.">El arroyo se divide en dos brazos: uno fluye al Pacífico y el otro al Atlántico.</div>
<div class="parada-tiempo" data-es="⏱ 10 minutos" data-en="⏱ 10 minutes" data-pt="⏱ 10 minutos">⏱ 10 minutos</div>
</div>
</div>
<div class="parada">
<div class="parada-km">km 15</div>
<div class="parada-linea"><div class="parada-dot"></div><div class="parada-stem"></div></div>
<div class="parada-content">
<div class="parada-nombre">Mirador Lago Machónico</div>
<div class="parada-tipo">🏔️ Mirador panorámico</div>
<div class="parada-desc">Balcón natural sobre la RN 40 con vista completa al lago. Ideal para fotos de paso.</div>
<div class="parada-tiempo" data-es="⏱ 15 minutos" data-en="⏱ 15 minutes" data-pt="⏱ 15 minutos">⏱ 15 minutos</div>
</div>
</div>
<div class="parada">
<div class="parada-km">km 35</div>
<div class="parada-linea"><div class="parada-dot"></div><div class="parada-stem"></div></div>
<div class="parada-content">
<div class="parada-nombre">Cascada Vullignanco</div>
<div class="parada-tipo">💧 Salto de agua</div>
<div class="parada-desc">Cascada de más de 20 metros visible desde la ruta, con área de estacionamiento.</div>
<div class="parada-tiempo" data-es="⏱ 15 minutos" data-en="⏱ 15 minutes" data-pt="⏱ 15 minutos">⏱ 15 minutos</div>
</div>
</div>
<div class="parada">
<div class="parada-km">km 45</div>
<div class="parada-linea"><div class="parada-dot"></div><div class="parada-stem"></div></div>
<div class="parada-content">
<div class="parada-nombre">Lago Hermoso — Acceso</div>
<div class="parada-tipo">🏖️ Playa / Descanso</div>
<div class="parada-desc">Desvío de 2 km de ripio hacia la orilla del lago. Bosque nativo y parador gastronómico.</div>
<div class="parada-tiempo" data-es="⏱ 30 minutos" data-en="⏱ 30 minutes" data-pt="⏱ 30 minutos">⏱ 30 minutos</div>
</div>
</div>
<div class="parada">
<div class="parada-km">km 60</div>
<div class="parada-linea"><div class="parada-dot"></div></div>
<div class="parada-content">
<div class="parada-nombre">Ruca Malén y Puente Viejo</div>
<div class="parada-tipo">📸 Patrimonio / Foto</div>
<div class="parada-desc">Puente histórico de madera sobre el Río Ruca Malén con aguas color verde esmeralda.</div>
<div class="parada-tiempo" data-es="⏱ 20 minutos" data-en="⏱ 20 minutes" data-pt="⏱ 20 minutos">⏱ 20 minutos</div>
</div>
</div>
</div>
</div>
<div class="ruta-card" onclick="this.classList.toggle('abierto')">
<div class="ruta-card-header">
<div class="ruta-card-header-left">
<div class="ruta-nombre">Ruta del Pehuén — RP 13</div>
<div class="ruta-tramo" data-es="Zapala ↔ Villa Pehuenia / Moquehue" data-en="Zapala ↔ Villa Pehuenia / Moquehue" data-pt="Zapala ↔ Villa Pehuenia / Moquehue">Zapala ↔ Villa Pehuenia / Moquehue</div>
<div class="ruta-meta">
<span class="ruta-badge">120 km</span>
<span class="ruta-badge" data-es="3 paradas" data-en="3 stops" data-pt="3 paradas">3 paradas</span>
<span class="ruta-badge" data-es="Asfalto + ripio" data-en="Paved + gravel" data-pt="Asfalto + cascalho">Asfalto + ripio</span>
</div>
</div>
<span class="ruta-arrow">▾</span>
</div>
<div class="ruta-body">
<div class="ruta-camino-aviso" data-es="⚠️ Tramos de ripio de montaña · Consultar partes de nieve en invierno antes de salir" data-en="⚠️ Mountain gravel sections · Check snow reports in winter before leaving" data-pt="⚠️ Trechos de cascalho de montanha · Verificar condições de neve no inverno antes de sair">⚠️ Tramos de ripio de montaña · Consultar partes de nieve en invierno antes de salir</div>
<div class="parada">
<div class="parada-km">km 40</div>
<div class="parada-linea"><div class="parada-dot"></div><div class="parada-stem"></div></div>
<div class="parada-content">
<div class="parada-nombre">Primer Bosque de Araucarias</div>
<div class="parada-tipo">🌲 Punto de impacto visual</div>
<div class="parada-desc">La estepa da paso a los primeros pehuenes milenarios. El paisaje cambia completamente.</div>
<div class="parada-tiempo" data-es="⏱ 10 minutos" data-en="⏱ 10 minutes" data-pt="⏱ 10 minutos">⏱ 10 minutos</div>
</div>
</div>
<div class="parada">
<div class="parada-km">km 75</div>
<div class="parada-linea"><div class="parada-dot"></div><div class="parada-stem"></div></div>
<div class="parada-content">
<div class="parada-nombre">Pampa de Lonco Luan</div>
<div class="parada-tipo">🏘️ Parada cultural</div>
<div class="parada-desc">Valle abierto con comunidades originarias, pastoreos tradicionales y vistas a la cordillera.</div>
<div class="parada-tiempo" data-es="⏱ 15 minutos" data-en="⏱ 15 minutes" data-pt="⏱ 15 minutos">⏱ 15 minutos</div>
</div>
</div>
<div class="parada">
<div class="parada-km">km 105</div>
<div class="parada-linea"><div class="parada-dot"></div></div>
<div class="parada-content">
<div class="parada-nombre">Mirador del Lago Litrán</div>
<div class="parada-tipo">🏔️ Mirador panorámico</div>
<div class="parada-desc">Antesala de Villa Pehuenia con vista al Lago Litrán y bosques nativos de fondo.</div>
<div class="parada-tiempo" data-es="⏱ 15 minutos" data-en="⏱ 15 minutes" data-pt="⏱ 15 minutos">⏱ 15 minutos</div>
</div>
</div>
<div class="ruta-card" onclick="this.classList.toggle('abierto')">
<div class="ruta-card-header">
<div class="ruta-card-header-left">
<div class="ruta-nombre" data-es="Bariloche ↔ Junín de los Andes" data-en="Bariloche ↔ Junín de los Andes" data-pt="Bariloche ↔ Junín de los Andes">Bariloche ↔ Junín de los Andes</div>
<div class="ruta-tramo" data-es="RN 40 / RP 63 — Valle Encantado · Paso Córdoba" data-en="RN 40 / RP 63 — Valle Encantado · Paso Córdoba" data-pt="RN 40 / RP 63 — Valle Encantado · Paso Córdoba">RN 40 / RP 63 — Valle Encantado · Paso Córdoba</div>
<div class="ruta-meta">
<span class="ruta-badge" data-es="~200 km" data-en="~200 km" data-pt="~200 km">~200 km</span>
<span class="ruta-badge" data-es="8 paradas" data-en="8 stops" data-pt="8 paradas">8 paradas</span>
<span class="ruta-badge" data-es="RN 40 + RP 63" data-en="RN 40 + RP 63" data-pt="RN 40 + RP 63">RN 40 + RP 63</span>
</div>
</div>
<span class="ruta-arrow">▾</span>
</div>
<div class="ruta-body">
<div class="ruta-camino-aviso" data-es="⚠️ Verificar estado de rutas antes de salir. Hielo posible en invierno." data-en="⚠️ Check road conditions before leaving. Ice possible in winter." data-pt="⚠️ Verifique estradas antes de sair. Gelo possível no inverno.">⚠️ Verificar estado de rutas antes de salir. Hielo posible en invierno.</div>
<div class="parada"><div class="parada-km">km 0</div><div class="parada-linea"><div class="parada-dot" style="background:#B84E3A;"></div><div class="parada-stem"></div></div><div class="parada-content"><div class="parada-nombre" data-es="⛽ YPF Dina Huapi" data-en="⛽ YPF Dina Huapi" data-pt="⛽ YPF Dina Huapi">⛽ YPF Dina Huapi</div><div class="parada-tipo" data-es="🛢️ Estación de servicio" data-en="🛢️ Gas station" data-pt="🛢️ Posto de gasolina">🛢️ Estación de servicio</div><div class="parada-desc" data-es="Último punto de carga al salir de Bariloche bordeando el Lago Nahuel Huapi." data-en="Last fuel stop leaving Bariloche along Lake Nahuel Huapi." data-pt="Último ponto de abastecimento ao sair de Bariloche.">Último punto de carga al salir de Bariloche bordeando el Lago Nahuel Huapi.</div><div class="parada-tiempo" data-es="⏱ 10 minutos" data-en="⏱ 10 minutes" data-pt="⏱ 10 minutos">⏱ 10 minutos</div></div></div>
<div class="parada"><div class="parada-km">km 35</div><div class="parada-linea"><div class="parada-dot"></div><div class="parada-stem"></div></div><div class="parada-content"><div class="parada-nombre" data-es="Mirador del Anfiteatro — Río Limay" data-en="Anfiteatro Viewpoint — Río Limay" data-pt="Mirante do Anfiteatro — Río Limay">Mirador del Anfiteatro — Río Limay</div><div class="parada-tipo" data-es="🏔️ Mirador panorámico" data-en="🏔️ Panoramic viewpoint" data-pt="🏔️ Mirante panorâmico">🏔️ Mirador panorámico</div><div class="parada-desc" data-es="Vista espectacular del gran meandro del Río Limay en la transición entre cordillera y estepa." data-en="Spectacular view of the Río Limay's great meander where the Andes meet the steppe." data-pt="Vista espetacular do grande meandro do Río Limay.">Vista espectacular del gran meandro del Río Limay en la transición entre cordillera y estepa.</div><div class="parada-tiempo" data-es="⏱ 15 minutos" data-en="⏱ 15 minutes" data-pt="⏱ 15 minutos">⏱ 15 minutos</div></div></div>
<div class="parada"><div class="parada-km">km 55</div><div class="parada-linea"><div class="parada-dot"></div><div class="parada-stem"></div></div><div class="parada-content"><div class="parada-nombre" data-es="Valle Encantado" data-en="Valle Encantado" data-pt="Valle Encantado">Valle Encantado</div><div class="parada-tipo" data-es="🗿 Patrimonio geológico" data-en="🗿 Geological heritage" data-pt="🗿 Patrimônio geológico">🗿 Patrimonio geológico</div><div class="parada-desc" data-es="Formaciones rocosas con figuras únicas — El Dedo de Dios, El Centinela — sobre las aguas turquesas del Río Limay." data-en="Rock formations with unique shapes — El Dedo de Dios, El Centinela — over the turquoise Río Limay." data-pt="Formações rochosas com formas únicas sobre as águas turquesa do Río Limay.">Formaciones rocosas con figuras únicas — El Dedo de Dios, El Centinela — sobre las aguas turquesas del Río Limay.</div><div class="parada-tiempo" data-es="⏱ 20 minutos" data-en="⏱ 20 minutes" data-pt="⏱ 20 minutos">⏱ 20 minutos</div></div></div>
<div class="parada"><div class="parada-km">km 80</div><div class="parada-linea"><div class="parada-dot"></div><div class="parada-stem"></div></div><div class="parada-content"><div class="parada-nombre" data-es="Confluencia Traful" data-en="Traful Confluence" data-pt="Confluência Traful">Confluencia Traful</div><div class="parada-tipo" data-es="🌊 Cruce estratégico" data-en="🌊 Strategic junction" data-pt="🌊 Cruzamento estratégico">🌊 Cruce estratégico</div><div class="parada-desc" data-es="Donde confluyen los ríos Traful y Limay. Desvío opcional a Villa Traful (RP 65) o continuar por RP 63 a Paso Córdoba." data-en="Where the Traful and Limay rivers meet. Optional detour to Villa Traful (RP 65) or continue on RP 63." data-pt="Onde os rios Traful e Limay se encontram. Desvio opcional para Villa Traful.">Donde confluyen los ríos Traful y Limay. Desvío opcional a Villa Traful (RP 65) o continuar por RP 63 a Paso Córdoba.</div><div class="parada-tiempo" data-es="⏱ 15 minutos" data-en="⏱ 15 minutes" data-pt="⏱ 15 minutos">⏱ 15 minutos</div></div></div>
<div class="parada"><div class="parada-km">km 110</div><div class="parada-linea"><div class="parada-dot"></div><div class="parada-stem"></div></div><div class="parada-content"><div class="parada-nombre" data-es="Paso Córdoba — Valle del Río Caleufu" data-en="Paso Córdoba — Caleufu River Valley" data-pt="Paso Córdoba — Vale do Río Caleufu">Paso Córdoba — Valle del Río Caleufu</div><div class="parada-tipo" data-es="🏔️ Ruta panorámica" data-en="🏔️ Scenic road" data-pt="🏔️ Rota panorâmica">🏔️ Ruta panorámica</div><div class="parada-desc" data-es="Tramo zigzagueante de la RP 63 con cañadones y formaciones rocosas imponentes." data-en="Winding RP 63 stretch with canyons and impressive rock formations." data-pt="Trecho sinuoso da RP 63 com cânions e formações rochosas imponentes.">Tramo zigzagueante de la RP 63 con cañadones y formaciones rocosas imponentes.</div><div class="parada-tiempo" data-es="⏱ 25 minutos" data-en="⏱ 25 minutes" data-pt="⏱ 25 minutos">⏱ 25 minutos</div></div></div>
<div class="parada"><div class="parada-km">km 150</div><div class="parada-linea"><div class="parada-dot" style="background:#B84E3A;"></div><div class="parada-stem"></div></div><div class="parada-content"><div class="parada-nombre" data-es="⛽ Parador Puente La Rinconada" data-en="⛽ La Rinconada Bridge Stop" data-pt="⛽ Parador Ponte La Rinconada">⛽ Parador Puente La Rinconada</div><div class="parada-tipo" data-es="🛢️ Abastecimiento — Río Collón Curá" data-en="🛢️ Gas & supplies — Río Collón Curá" data-pt="🛢️ Abastecimento — Río Collón Curá">🛢️ Abastecimiento — Río Collón Curá</div><div class="parada-desc" data-es="Punto de abastecimiento sobre RN 40 en el cruce del Río Collón Curá." data-en="Supply stop on RN 40 at the Río Collón Curá crossing." data-pt="Ponto de abastecimento na RN 40 na travessia do Río Collón Curá.">Punto de abastecimiento sobre RN 40 en el cruce del Río Collón Curá.</div><div class="parada-tiempo" data-es="⏱ 15 minutos" data-en="⏱ 15 minutes" data-pt="⏱ 15 minutos">⏱ 15 minutos</div></div></div>
<div class="parada"><div class="parada-km">km 175</div><div class="parada-linea"><div class="parada-dot"></div><div class="parada-stem"></div></div><div class="parada-content"><div class="parada-nombre" data-es="Mirador Río Chimehuín & Volcán Lanín" data-en="Chimehuín River & Volcán Lanín viewpoint" data-pt="Mirante Río Chimehuín e Volcán Lanín">Mirador Río Chimehuín & Volcán Lanín</div><div class="parada-tipo" data-es="📸 Foto imperdible" data-en="📸 Must-see photo stop" data-pt="📸 Foto imperdível">📸 Foto imperdible</div><div class="parada-desc" data-es="El río ícono de la pesca con mosca con la silueta perfecta del Volcán Lanín en el horizonte." data-en="The iconic fly fishing river with the perfect silhouette of Volcán Lanín on the horizon." data-pt="O rio ícone da pesca com mosca com a silhueta perfeita do Volcán Lanín no horizonte.">El río ícono de la pesca con mosca con la silueta perfecta del Volcán Lanín en el horizonte.</div><div class="parada-tiempo" data-es="⏱ 15 minutos" data-en="⏱ 15 minutes" data-pt="⏱ 15 minutos">⏱ 15 minutos</div></div></div>
<div class="parada"><div class="parada-km">km 200</div><div class="parada-linea"><div class="parada-dot" style="background:#5C7A4A;"></div></div><div class="parada-content"><div class="parada-nombre" data-es="⛽ Ingreso a Junín de los Andes" data-en="⛽ Arrival at Junín de los Andes" data-pt="⛽ Chegada a Junín de los Andes">⛽ Ingreso a Junín de los Andes</div><div class="parada-tipo" data-es="🏁 Destino — YPF / Axion" data-en="🏁 Destination — YPF / Axion" data-pt="🏁 Destino — YPF / Axion">🏁 Destino — YPF / Axion</div><div class="parada-desc" data-es="Portal de entrada a la Capital Nacional de la Pesca con Mosca. Combustible, gastronomía e info turística." data-en="Gateway to Argentina's Fly Fishing Capital. Fuel, food and tourist information." data-pt="Portal da Capital Nacional da Pesca com Mosca. Combustível, gastronomia e informações turísticas.">Portal de entrada a la Capital Nacional de la Pesca con Mosca. Combustible, gastronomía e info turística.</div><div class="parada-tiempo" data-es="⏱ 10 minutos" data-en="⏱ 10 minutes" data-pt="⏱ 10 minutos">⏱ 10 minutos</div></div></div>
</div>
</div>
<div class="ruta-card" onclick="this.classList.toggle('abierto')">
<div class="ruta-card-header">
<div class="ruta-card-header-left">
<div class="ruta-nombre" data-es="Neuquén → San Martín / Junín por Piedra del Águila" data-en="Neuquén → San Martín / Junín via Piedra del Águila" data-pt="Neuquén → San Martín / Junín via Piedra del Águila">Neuquén → San Martín / Junín por Piedra del Águila</div>
<div class="ruta-tramo" data-es="RN 237 — Chocón · Piedra del Águila · Collón Curá" data-en="RN 237 — Chocón · Piedra del Águila · Collón Curá" data-pt="RN 237 — Chocón · Piedra del Águila · Collón Curá">RN 237 — Chocón · Piedra del Águila · Collón Curá</div>
<div class="ruta-meta">
<span class="ruta-badge" data-es="~380 km" data-en="~380 km" data-pt="~380 km">~380 km</span>
<span class="ruta-badge" data-es="5 paradas" data-en="5 stops" data-pt="5 paradas">5 paradas</span>
<span class="ruta-badge" data-es="RN 237" data-en="RN 237" data-pt="RN 237">RN 237</span>
</div>
</div>
<span class="ruta-arrow">▾</span>
</div>
<div class="ruta-body">
<div class="ruta-camino-aviso" data-es="⚠️ Ruta clásica bordeando el Río Limay. Verificar estado en invierno." data-en="⚠️ Classic route along Río Limay. Check conditions in winter." data-pt="⚠️ Rota clássica ao longo do Río Limay. Verificar condições no inverno.">⚠️ Ruta clásica bordeando el Río Limay. Verificar estado en invierno.</div>
<div class="parada"><div class="parada-km">km 10</div><div class="parada-linea"><div class="parada-dot" style="background:#B84E3A;"></div><div class="parada-stem"></div></div><div class="parada-content"><div class="parada-nombre" data-es="⛽ YPF Plottier / Senillosa" data-en="⛽ YPF Plottier / Senillosa" data-pt="⛽ YPF Plottier / Senillosa">⛽ YPF Plottier / Senillosa</div><div class="parada-tipo" data-es="🛢️ Estación de servicio" data-en="🛢️ Gas station" data-pt="🛢️ Posto de gasolina">🛢️ Estación de servicio</div><div class="parada-desc" data-es="Último punto de carga full al salir del Alto Valle antes de adentrarse en la meseta por RN 237." data-en="Last full tank stop leaving Alto Valle before entering the plateau on RN 237." data-pt="Último ponto de abastecimento ao sair do Alto Valle pela RN 237.">Último punto de carga full al salir del Alto Valle antes de adentrarse en la meseta por RN 237.</div><div class="parada-tiempo" data-es="⏱ 10 minutos" data-en="⏱ 10 minutes" data-pt="⏱ 10 minutos">⏱ 10 minutos</div></div></div>
<div class="parada"><div class="parada-km">km 90</div><div class="parada-linea"><div class="parada-dot"></div><div class="parada-stem"></div></div><div class="parada-content"><div class="parada-nombre" data-es="Villa El Chocón — Dinosaurios & Lago" data-en="Villa El Chocón — Dinosaurs & Lake" data-pt="Villa El Chocón — Dinossauros e Lago">Villa El Chocón — Dinosaurios & Lago</div><div class="parada-tipo" data-es="🦕 Patrimonio paleontológico" data-en="🦕 Paleontological heritage" data-pt="🦕 Patrimônio paleontológico">🦕 Patrimonio paleontológico</div><div class="parada-desc" data-es="Museo Ernesto Bachmann (hogar del Giganotosaurus) y huellas fosilizadas a orillas del Embalse Ramos Mexía." data-en="Ernesto Bachmann Museum (home of Giganotosaurus) and fossilized footprints on the shores of Ramos Mexía Reservoir." data-pt="Museu Ernesto Bachmann (lar do Giganotossauro) e pegadas fossilizadas às margens do Reservatório Ramos Mexía.">Museo Ernesto Bachmann (hogar del Giganotosaurus) y huellas fosilizadas a orillas del Embalse Ramos Mexía.</div><div class="parada-tiempo" data-es="⏱ 45 minutos" data-en="⏱ 45 minutes" data-pt="⏱ 45 minutos">⏱ 45 minutos</div></div></div>
<div class="parada"><div class="parada-km">km 210</div><div class="parada-linea"><div class="parada-dot" style="background:#B84E3A;"></div><div class="parada-stem"></div></div><div class="parada-content"><div class="parada-nombre" data-es="⛽ Piedra del Águila — Parador de Ruta" data-en="⛽ Piedra del Águila — Road Stop" data-pt="⛽ Piedra del Águila — Parador de Rota">⛽ Piedra del Águila — Parador de Ruta</div><div class="parada-tipo" data-es="🛢️ Parada técnica obligatoria" data-en="🛢️ Essential technical stop" data-pt="🛢️ Parada técnica essencial">🛢️ Parada técnica obligatoria</div><div class="parada-desc" data-es="YPF y Axion con paradores gastronómicos completos, baños y servicios. Última carga garantizada antes de los cañadones." data-en="YPF and Axion with full food stops, bathrooms and services. Last guaranteed fuel before the canyons." data-pt="YPF e Axion com parador gastronômico, banheiros e serviços. Último abastecimento garantido antes dos cânions.">YPF y Axion con paradores gastronómicos completos, baños y servicios. Última carga garantizada antes de los cañadones.</div><div class="parada-tiempo" data-es="⏱ 30 minutos" data-en="⏱ 30 minutes" data-pt="⏱ 30 minutos">⏱ 30 minutos</div></div></div>
<div class="parada"><div class="parada-km">km 280</div><div class="parada-linea"><div class="parada-dot"></div><div class="parada-stem"></div></div><div class="parada-content"><div class="parada-nombre" data-es="Mirador Bajada del Collón Curá" data-en="Collón Curá Descent Viewpoint" data-pt="Mirante Descida do Collón Curá">Mirador Bajada del Collón Curá</div><div class="parada-tipo" data-es="🏔️ Mirador panorámico" data-en="🏔️ Panoramic viewpoint" data-pt="🏔️ Mirante panorâmico">🏔️ Mirador panorámico</div><div class="parada-desc" data-es="Vista espectacular del valle del Río Collón Curá donde la meseta da paso al paisaje pre-cordillerano." data-en="Spectacular view of the Collón Curá River valley where the plateau gives way to pre-Andean landscapes." data-pt="Vista espetacular do vale do Río Collón Curá onde o planalto dá lugar à paisagem pré-andina.">Vista espectacular del valle del Río Collón Curá donde la meseta da paso al paisaje pre-cordillerano.</div><div class="parada-tiempo" data-es="⏱ 15 minutos" data-en="⏱ 15 minutes" data-pt="⏱ 15 minutos">⏱ 15 minutos</div></div></div>
<div class="parada"><div class="parada-km">km 380</div><div class="parada-linea"><div class="parada-dot" style="background:#5C7A4A;"></div></div><div class="parada-content"><div class="parada-nombre" data-es="⛽ Puente La Rinconada — Empalme RN 40" data-en="⛽ La Rinconada Bridge — RN 40 Junction" data-pt="⛽ Ponte La Rinconada — Entroncamento RN 40">⛽ Puente La Rinconada — Empalme RN 40</div><div class="parada-tipo" data-es="🛢️ Cruce hacia Junín / SMA" data-en="🛢️ Junction to Junín / SMA" data-pt="🛢️ Cruzamento para Junín / SMA">🛢️ Cruce hacia Junín / SMA</div><div class="parada-desc" data-es="Punto donde se une la ruta desde Piedra del Águila con la RN 40. Tomás hacia Junín de los Andes o San Martín según destino." data-en="Point where the Piedra del Águila route meets RN 40. Continue to Junín de los Andes or San Martín." data-pt="Ponto onde a rota de Piedra del Águila encontra a RN 40. Continue para Junín ou San Martín.">Punto donde se une la ruta desde Piedra del Águila con la RN 40. Tomás hacia Junín de los Andes o San Martín según destino.</div><div class="parada-tiempo" data-es="⏱ 15 minutos" data-en="⏱ 15 minutes" data-pt="⏱ 15 minutos">⏱ 15 minutos</div></div></div>
</div>
</div>
<div class="ruta-card" onclick="this.classList.toggle('abierto')">
<div class="ruta-card-header">
<div class="ruta-card-header-left">
<div class="ruta-nombre" data-es="Neuquén → San Martín / Junín por Zapala" data-en="Neuquén → San Martín / Junín via Zapala" data-pt="Neuquén → San Martín / Junín via Zapala">Neuquén → San Martín / Junín por Zapala</div>
<div class="ruta-tramo" data-es="RN 22 + RN 40 — Cutral Có · Zapala · La Rinconada" data-en="RN 22 + RN 40 — Cutral Có · Zapala · La Rinconada" data-pt="RN 22 + RN 40 — Cutral Có · Zapala · La Rinconada">RN 22 + RN 40 — Cutral Có · Zapala · La Rinconada</div>
<div class="ruta-meta">
<span class="ruta-badge" data-es="~380 km" data-en="~380 km" data-pt="~380 km">~380 km</span>
<span class="ruta-badge" data-es="5 paradas" data-en="5 stops" data-pt="5 paradas">5 paradas</span>
<span class="ruta-badge" data-es="RN 22 + RN 40" data-en="RN 22 + RN 40" data-pt="RN 22 + RN 40">RN 22 + RN 40</span>
</div>
</div>
<span class="ruta-arrow">▾</span>
</div>
<div class="ruta-body">
<div class="ruta-camino-aviso" data-es="✅ Opción recomendada para evitar el tránsito hacia Bariloche. Ruta más tranquila y directa al norte cordillerano." data-en="✅ Recommended option to avoid Bariloche traffic. Quieter and more direct to the northern Andes." data-pt="✅ Opção recomendada para evitar o trânsito de Bariloche. Mais tranquila e direta ao norte andino.">✅ Opción recomendada para evitar el tránsito hacia Bariloche. Ruta más tranquila y directa al norte cordillerano.</div>
<div class="parada"><div class="parada-km">km 100</div><div class="parada-linea"><div class="parada-dot" style="background:#B84E3A;"></div><div class="parada-stem"></div></div><div class="parada-content"><div class="parada-nombre" data-es="⛽ YPF / Axion Cutral Có — Plaza Huincul" data-en="⛽ YPF / Axion Cutral Có — Plaza Huincul" data-pt="⛽ YPF / Axion Cutral Có — Plaza Huincul">⛽ YPF / Axion Cutral Có — Plaza Huincul</div><div class="parada-tipo" data-es="🛢️ Reabastecimiento en comarca petrolera" data-en="🛢️ Fuel stop in oil region" data-pt="🛢️ Abastecimento na região petrolífera">🛢️ Reabastecimiento en comarca petrolera</div><div class="parada-desc" data-es="Punto de carga sobre RN 22 en la comarca petrolera. Buen momento para estirar las piernas." data-en="Fuel stop on RN 22 in the oil region. Good moment to stretch your legs." data-pt="Ponto de abastecimento na RN 22 na região petrolífera. Bom momento para esticar as pernas.">Punto de carga sobre RN 22 en la comarca petrolera. Buen momento para estirar las piernas.</div><div class="parada-tiempo" data-es="⏱ 15 minutos" data-en="⏱ 15 minutes" data-pt="⏱ 15 minutos">⏱ 15 minutos</div></div></div>
<div class="parada"><div class="parada-km">km 110</div><div class="parada-linea"><div class="parada-dot"></div><div class="parada-stem"></div></div><div class="parada-content"><div class="parada-nombre" data-es="Plaza Huincul — Réplica Argentinosaurus" data-en="Plaza Huincul — Argentinosaurus Replica" data-pt="Plaza Huincul — Réplica Argentinosaurus">Plaza Huincul — Réplica Argentinosaurus</div><div class="parada-tipo" data-es="🦕 Patrimonio paleontológico" data-en="🦕 Paleontological heritage" data-pt="🦕 Patrimônio paleontológico">🦕 Patrimonio paleontológico</div><div class="parada-desc" data-es="Réplica en tamaño real a la vera de la ruta del dinosaurio herbívoro más grande del mundo." data-en="Life-size roadside replica of the world's largest herbivorous dinosaur." data-pt="Réplica em tamanho real à beira da estrada do maior dinossauro herbívoro do mundo.">Réplica en tamaño real a la vera de la ruta del dinosaurio herbívoro más grande del mundo.</div><div class="parada-tiempo" data-es="⏱ 20 minutos" data-en="⏱ 20 minutes" data-pt="⏱ 20 minutos">⏱ 20 minutos</div></div></div>
<div class="parada"><div class="parada-km">km 190</div><div class="parada-linea"><div class="parada-dot" style="background:#B84E3A;"></div><div class="parada-stem"></div></div><div class="parada-content"><div class="parada-nombre" data-es="⛽ Zapala — Nodo estratégico RN 40" data-en="⛽ Zapala — Strategic RN 40 Hub" data-pt="⛽ Zapala — Nodo estratégico RN 40">⛽ Zapala — Nodo estratégico RN 40</div><div class="parada-tipo" data-es="🛢️ Carga obligatoria antes de la montaña" data-en="🛢️ Essential fuel before the mountains" data-pt="🛢️ Abastecimento essencial antes da montanha">🛢️ Carga obligatoria antes de la montaña</div><div class="parada-desc" data-es="Ciudad encrucijada clave. Carga de combustible antes de tomar RN 40 Sur hacia Junín/SMA o Norte hacia Las Lajas/Caviahue." data-en="Key crossroads city. Fuel up before taking RN 40 South to Junín/SMA or North to Las Lajas/Caviahue." data-pt="Cidade cruzamento chave. Abasteça antes de seguir pela RN 40 Sul para Junín/SMA ou Norte para Las Lajas/Caviahue.">Ciudad encrucijada clave. Carga de combustible antes de tomar RN 40 Sur hacia Junín/SMA o Norte hacia Las Lajas/Caviahue.</div><div class="parada-tiempo" data-es="⏱ 20 minutos" data-en="⏱ 20 minutes" data-pt="⏱ 20 minutos">⏱ 20 minutos</div></div></div>
<div class="parada"><div class="parada-km">km 270</div><div class="parada-linea"><div class="parada-dot"></div><div class="parada-stem"></div></div><div class="parada-content"><div class="parada-nombre" data-es="Mirador Cuesta del Espino" data-en="Cuesta del Espino Viewpoint" data-pt="Mirante Cuesta del Espino">Mirador Cuesta del Espino</div><div class="parada-tipo" data-es="🏔️ Avistaje de cóndores" data-en="🏔️ Condor spotting" data-pt="🏔️ Avistamento de condores">🏔️ Avistaje de cóndores</div><div class="parada-desc" data-es="Punto elevado sobre RN 40 entre Zapala y La Rinconada. Excelente para avistaje de cóndores andinos y vistas de la meseta alta." data-en="Elevated point on RN 40 between Zapala and La Rinconada. Excellent for Andean condor spotting and plateau views." data-pt="Ponto elevado na RN 40 entre Zapala e La Rinconada. Excelente para avistar cóndores andinos.">Punto elevado sobre RN 40 entre Zapala y La Rinconada. Excelente para avistaje de cóndores andinos y vistas de la meseta alta.</div><div class="parada-tiempo" data-es="⏱ 15 minutos" data-en="⏱ 15 minutes" data-pt="⏱ 15 minutos">⏱ 15 minutos</div></div></div>
<div class="parada"><div class="parada-km">km 380</div><div class="parada-linea"><div class="parada-dot" style="background:#5C7A4A;"></div></div><div class="parada-content"><div class="parada-nombre" data-es="⛽ Puente La Rinconada — Empalme hacia Junín / SMA" data-en="⛽ La Rinconada Bridge — Junction to Junín / SMA" data-pt="⛽ Ponte La Rinconada — Entroncamento para Junín / SMA">⛽ Puente La Rinconada — Empalme hacia Junín / SMA</div><div class="parada-tipo" data-es="🛢️ Cruce del Río Collón Curá" data-en="🛢️ Collón Curá River crossing" data-pt="🛢️ Travessia do Río Collón Curá">🛢️ Cruce del Río Collón Curá</div><div class="parada-desc" data-es="Punto de encuentro de ambas rutas desde Neuquén. Cruzás el Río Collón Curá y llegás a Junín o continuás a San Martín." data-en="Meeting point of both routes from Neuquén. Cross Río Collón Curá and arrive in Junín or continue to San Martín." data-pt="Ponto de encontro das duas rotas de Neuquén. Atravesse o Río Collón Curá e chegue a Junín ou continue para San Martín.">Punto de encuentro de ambas rutas desde Neuquén. Cruzás el Río Collón Curá y llegás a Junín o continuás a San Martín.</div><div class="parada-tiempo" data-es="⏱ 15 minutos" data-en="⏱ 15 minutes" data-pt="⏱ 15 minutos">⏱ 15 minutos</div></div></div>
</div>
</div>
<div class="ruta-card" onclick="this.classList.toggle('abierto')">
<div class="ruta-card-header">
<div class="ruta-card-header-left">
<div class="ruta-nombre" data-es="Neuquén → Bariloche" data-en="Neuquén → Bariloche" data-pt="Neuquén → Bariloche">Neuquén → Bariloche</div>
<div class="ruta-tramo" data-es="RN 237 — Chocón · Piedra del Águila · Valle Encantado" data-en="RN 237 — Chocón · Piedra del Águila · Valle Encantado" data-pt="RN 237 — Chocón · Piedra del Águila · Valle Encantado">RN 237 — Chocón · Piedra del Águila · Valle Encantado</div>
<div class="ruta-meta">
<span class="ruta-badge">~450 km</span>
<span class="ruta-badge" data-es="6 paradas" data-en="6 stops" data-pt="6 paradas">6 paradas</span>
<span class="ruta-badge">RN 237</span>
</div>
</div>
<span class="ruta-arrow">▾</span>
</div>
<div class="ruta-body">
<div class="ruta-camino-aviso" data-es="⚠️ Ruta con tramos de montaña. En invierno verificar cadenas y estado antes de salir." data-en="⚠️ Route with mountain sections. Check chains and road status in winter." data-pt="⚠️ Rota com trechos de montanha. Verificar correntes e estado no inverno.">⚠️ Ruta con tramos de montaña. En invierno verificar cadenas y estado antes de salir.</div>
<div class="parada"><div class="parada-km">km 10</div><div class="parada-linea"><div class="parada-dot" style="background:#B84E3A;"></div><div class="parada-stem"></div></div><div class="parada-content"><div class="parada-nombre" data-es="⛽ YPF Plottier / Senillosa" data-en="⛽ YPF Plottier / Senillosa" data-pt="⛽ YPF Plottier / Senillosa">⛽ YPF Plottier / Senillosa</div><div class="parada-tipo" data-es="🛢️ Carga full al salir del Alto Valle" data-en="🛢️ Full tank leaving Alto Valle" data-pt="🛢️ Tanque cheio ao sair do Alto Vale">🛢️ Carga full al salir del Alto Valle</div><div class="parada-desc" data-es="Último punto de carga garantida antes de adentrarse en la meseta patagónica por RN 237." data-en="Last guaranteed fuel stop before entering the Patagonian plateau on RN 237." data-pt="Último ponto de abastecimento garantido antes de entrar no planalto patagônico pela RN 237.">Último punto de carga garantida antes de adentrarse en la meseta patagónica por RN 237.</div><div class="parada-tiempo" data-es="⏱ 10 minutos" data-en="⏱ 10 minutes" data-pt="⏱ 10 minutos">⏱ 10 minutos</div></div></div>
<div class="parada"><div class="parada-km">km 90</div><div class="parada-linea"><div class="parada-dot"></div><div class="parada-stem"></div></div><div class="parada-content"><div class="parada-nombre" data-es="Villa El Chocón — Dinosaurios & Lago" data-en="Villa El Chocón — Dinosaurs & Lake" data-pt="Villa El Chocón — Dinossauros e Lago">Villa El Chocón — Dinosaurios & Lago</div><div class="parada-tipo" data-es="🦕 Patrimonio paleontológico" data-en="🦕 Paleontological heritage" data-pt="🦕 Patrimônio paleontológico">🦕 Patrimonio paleontológico</div><div class="parada-desc" data-es="Museo Ernesto Bachmann (hogar del Giganotosaurus) y huellas fosilizadas a orillas del Embalse Ramos Mexía. Parada imperdible a la vera de la ruta." data-en="Ernesto Bachmann Museum (home of Giganotosaurus) and fossilized footprints on the shores of Ramos Mexía Reservoir." data-pt="Museu Ernesto Bachmann (lar do Giganotossauro) e pegadas fossilizadas nas margens do Reservatório Ramos Mexía.">Museo Ernesto Bachmann (Giganotosaurus) y huellas fosilizadas a orillas del Embalse Ramos Mexía.</div><div class="parada-tiempo" data-es="⏱ 45 minutos" data-en="⏱ 45 minutes" data-pt="⏱ 45 minutos">⏱ 45 minutos</div></div></div>
<div class="parada"><div class="parada-km">km 210</div><div class="parada-linea"><div class="parada-dot" style="background:#B84E3A;"></div><div class="parada-stem"></div></div><div class="parada-content"><div class="parada-nombre" data-es="⛽ Piedra del Águila — Parador de Ruta" data-en="⛽ Piedra del Águila — Road Stop" data-pt="⛽ Piedra del Águila — Parador de Rota">⛽ Piedra del Águila — Parador de Ruta</div><div class="parada-tipo" data-es="🛢️ Parada técnica y gastronómica" data-en="🛢️ Technical and food stop" data-pt="🛢️ Parada técnica e gastronômica">🛢️ Parada técnica y gastronómica</div><div class="parada-desc" data-es="YPF y Axion con paradores completos, baños y servicios. Parada clásica antes de los cañadones del Limay." data-en="YPF and Axion with full stops, bathrooms and services. Classic stop before the Limay canyons." data-pt="YPF e Axion com paradouros completos, banheiros e serviços. Parada clássica antes dos cânions do Limay.">YPF y Axion con paradores completos. Parada clásica antes de los cañadones del Limay.</div><div class="parada-tiempo" data-es="⏱ 30 minutos" data-en="⏱ 30 minutes" data-pt="⏱ 30 minutos">⏱ 30 minutos</div></div></div>
<div class="parada"><div class="parada-km">km 320</div><div class="parada-linea"><div class="parada-dot"></div><div class="parada-stem"></div></div><div class="parada-content"><div class="parada-nombre" data-es="Mirador del Anfiteatro — Río Limay" data-en="Anfiteatro Viewpoint — Río Limay" data-pt="Mirante do Anfiteatro — Río Limay">Mirador del Anfiteatro — Río Limay</div><div class="parada-tipo" data-es="🏔️ Mirador panorámico" data-en="🏔️ Panoramic viewpoint" data-pt="🏔️ Mirante panorâmico">🏔️ Mirador panorámico</div><div class="parada-desc" data-es="Vista espectacular del gran meandro del Río Limay. Transición entre la meseta y la pre-cordillera." data-en="Spectacular view of the Río Limay's great meander. Transition between the plateau and the pre-Andes." data-pt="Vista espetacular do grande meandro do Río Limay. Transição entre o planalto e a pré-cordilheira.">Vista espectacular del gran meandro del Río Limay. Transición entre la meseta y la pre-cordillera.</div><div class="parada-tiempo" data-es="⏱ 15 minutos" data-en="⏱ 15 minutes" data-pt="⏱ 15 minutos">⏱ 15 minutos</div></div></div>
<div class="parada"><div class="parada-km">km 370</div><div class="parada-linea"><div class="parada-dot"></div><div class="parada-stem"></div></div><div class="parada-content"><div class="parada-nombre" data-es="Valle Encantado" data-en="Valle Encantado" data-pt="Valle Encantado">Valle Encantado</div><div class="parada-tipo" data-es="🗿 Patrimonio geológico" data-en="🗿 Geological heritage" data-pt="🗿 Patrimônio geológico">🗿 Patrimonio geológico</div><div class="parada-desc" data-es="Formaciones rocosas volcánicas únicas — El Dedo de Dios, El Centinela — sobre las aguas turquesas del Río Limay." data-en="Unique volcanic rock formations — El Dedo de Dios, El Centinela — over the turquoise Río Limay." data-pt="Formações rochosas vulcânicas únicas sobre as águas turquesa do Río Limay.">Formaciones volcánicas únicas — El Dedo de Dios, El Centinela — sobre el Río Limay turquesa.</div><div class="parada-tiempo" data-es="⏱ 20 minutos" data-en="⏱ 20 minutes" data-pt="⏱ 20 minutos">⏱ 20 minutos</div></div></div>
<div class="parada"><div class="parada-km">km 450</div><div class="parada-linea"><div class="parada-dot" style="background:#5C7A4A;"></div></div><div class="parada-content"><div class="parada-nombre" data-es="⛽ YPF Dina Huapi — Ingreso a Bariloche" data-en="⛽ YPF Dina Huapi — Bariloche entrance" data-pt="⛽ YPF Dina Huapi — Entrada Bariloche">⛽ YPF Dina Huapi — Ingreso a Bariloche</div><div class="parada-tipo" data-es="🏁 Destino — bordeando el Nahuel Huapi" data-en="🏁 Destination — along Lake Nahuel Huapi" data-pt="🏁 Destino — margeando o Nahuel Huapi">🏁 Destino — bordeando el Nahuel Huapi</div><div class="parada-desc" data-es="Última parada antes de entrar a Bariloche bordeando el Lago Nahuel Huapi. Carga, gastronomía y vistas al lago." data-en="Last stop before entering Bariloche along Lake Nahuel Huapi. Fuel, food and lake views." data-pt="Última parada antes de entrar em Bariloche margeando o Lago Nahuel Huapi.">Última parada antes de Bariloche bordeando el Lago Nahuel Huapi.</div><div class="parada-tiempo" data-es="⏱ 10 minutos" data-en="⏱ 10 minutes" data-pt="⏱ 10 minutos">⏱ 10 minutos</div></div></div>
</div>
</div>
<div class="ruta-card" onclick="this.classList.toggle('abierto')">
<div class="ruta-card-header">
<div class="ruta-card-header-left">
<div class="ruta-nombre" data-es="Neuquén → Caviahue & Copahue" data-en="Neuquén → Caviahue & Copahue" data-pt="Neuquén → Caviahue & Copahue">Neuquén → Caviahue & Copahue</div>
<div class="ruta-tramo" data-es="RN 22 + RN 40 + RP 21/26 — Zapala · Las Lajas · Salto del Agrio" data-en="RN 22 + RN 40 + RP 21/26 — Zapala · Las Lajas · Salto del Agrio" data-pt="RN 22 + RN 40 + RP 21/26 — Zapala · Las Lajas · Salto del Agrio">RN 22 + RN 40 + RP 21/26 — Zapala · Las Lajas · Salto del Agrio</div>
<div class="ruta-meta">
<span class="ruta-badge">~330 km</span>
<span class="ruta-badge" data-es="5 paradas" data-en="5 stops" data-pt="5 paradas">5 paradas</span>
<span class="ruta-badge">RN 22 + RP 21/26</span>
</div>
</div>
<span class="ruta-arrow">▾</span>
</div>
<div class="ruta-body">
<div class="ruta-camino-aviso" data-es="⚠️ Zona volcánica. En invierno verificar estado de RP 26 antes de salir. Cadenas recomendadas." data-en="⚠️ Volcanic area. Check RP 26 conditions before leaving in winter. Chains recommended." data-pt="⚠️ Área vulcânica. Verificar estado da RP 26 no inverno antes de sair. Correntes recomendadas.">⚠️ Zona volcánica. En invierno verificar estado de RP 26 antes de salir.</div>
<div class="parada"><div class="parada-km">km 100</div><div class="parada-linea"><div class="parada-dot" style="background:#B84E3A;"></div><div class="parada-stem"></div></div><div class="parada-content"><div class="parada-nombre" data-es="⛽ YPF / Axion Cutral Có — Plaza Huincul" data-en="⛽ YPF / Axion Cutral Có — Plaza Huincul" data-pt="⛽ YPF / Axion Cutral Có — Plaza Huincul">⛽ YPF / Axion Cutral Có — Plaza Huincul</div><div class="parada-tipo" data-es="🛢️ Reabastecimiento comarca petrolera" data-en="🛢️ Fuel stop — oil region" data-pt="🛢️ Abastecimento — região petrolífera">🛢️ Reabastecimiento comarca petrolera</div><div class="parada-desc" data-es="Punto de carga sobre RN 22 en la comarca petrolera neuquina. Buen momento para estirar las piernas." data-en="Fuel stop on RN 22 in Neuquén's oil region. Good moment to stretch your legs." data-pt="Ponto de abastecimento na RN 22 na região petrolífera de Neuquén.">Punto de carga en la comarca petrolera. Buen momento para estirar las piernas.</div><div class="parada-tiempo" data-es="⏱ 15 minutos" data-en="⏱ 15 minutes" data-pt="⏱ 15 minutos">⏱ 15 minutos</div></div></div>
<div class="parada"><div class="parada-km">km 190</div><div class="parada-linea"><div class="parada-dot" style="background:#B84E3A;"></div><div class="parada-stem"></div></div><div class="parada-content"><div class="parada-nombre" data-es="⛽ Zapala — Carga obligatoria Norte" data-en="⛽ Zapala — Essential North fuel stop" data-pt="⛽ Zapala — Abastecimento essencial Norte">⛽ Zapala — Carga obligatoria Norte</div><div class="parada-tipo" data-es="🛢️ Último combustible garantizado antes de Las Lajas" data-en="🛢️ Last guaranteed fuel before Las Lajas" data-pt="🛢️ Último combustível garantido antes de Las Lajas">🛢️ Último combustible garantizado antes de Las Lajas</div><div class="parada-desc" data-es="Ciudad encrucijada. Cargá el tanque antes de tomar RN 40 Norte hacia Las Lajas y la zona volcánica." data-en="Crossroads city. Fill up before taking RN 40 North toward Las Lajas and the volcanic zone." data-pt="Cidade cruzamento. Abasteça antes de pegar a RN 40 Norte para Las Lajas e a zona vulcânica.">Ciudad encrucijada. Cargá el tanque antes de tomar RN 40 Norte hacia Las Lajas.</div><div class="parada-tiempo" data-es="⏱ 20 minutos" data-en="⏱ 20 minutes" data-pt="⏱ 20 minutos">⏱ 20 minutos</div></div></div>
<div class="parada"><div class="parada-km">km 250</div><div class="parada-linea"><div class="parada-dot" style="background:#B84E3A;"></div><div class="parada-stem"></div></div><div class="parada-content"><div class="parada-nombre" data-es="⛽ Las Lajas — Última carga garantizada" data-en="⛽ Las Lajas — Last guaranteed fuel" data-pt="⛽ Las Lajas — Último abastecimento garantido">⛽ Las Lajas — Última carga garantizada</div><div class="parada-tipo" data-es="🛢️ Estación YPF antes de la zona volcánica" data-en="🛢️ YPF station before the volcanic zone" data-pt="🛢️ Posto YPF antes da zona vulcânica">🛢️ Estación YPF antes de la zona volcánica</div><div class="parada-desc" data-es="ÚLTIMO punto de combustible garantizado antes de subir por RP 21/26 a Caviahue y Copahue. No salir sin el tanque lleno." data-en="LAST guaranteed fuel before heading up RP 21/26 to Caviahue and Copahue. Don't leave with a low tank." data-pt="ÚLTIMO ponto de combustível garantido antes de subir pela RP 21/26 para Caviahue e Copahue.">ÚLTIMO combustible garantizado antes de subir por RP 21/26 a Caviahue y Copahue.</div><div class="parada-tiempo" data-es="⏱ 15 minutos" data-en="⏱ 15 minutes" data-pt="⏱ 15 minutos">⏱ 15 minutos</div></div></div>
<div class="parada"><div class="parada-km">km 295</div><div class="parada-linea"><div class="parada-dot"></div><div class="parada-stem"></div></div><div class="parada-content"><div class="parada-nombre" data-es="Cajón del Hualcupén & Riscos Amarillos" data-en="Cajón del Hualcupén & Riscos Amarillos" data-pt="Cajón del Hualcupén e Riscos Amarillos">Cajón del Hualcupén & Riscos Amarillos</div><div class="parada-tipo" data-es="🌋 Paisaje volcánico" data-en="🌋 Volcanic landscape" data-pt="🌋 Paisagem vulcânica">🌋 Paisaje volcánico</div><div class="parada-desc" data-es="Valle de origen volcánico con paredes de basalto y araucarias sobre la RP 26. Primeras vistas del paisaje único de la zona." data-en="Volcanic valley with basalt walls and araucaria trees on RP 26. First views of the area's unique landscape." data-pt="Vale de origem vulcânica com paredes de basalto e araucárias na RP 26.">Valle volcánico con paredes de basalto y araucarias. Primeras vistas de la zona.</div><div class="parada-tiempo" data-es="⏱ 15 minutos" data-en="⏱ 15 minutes" data-pt="⏱ 15 minutos">⏱ 15 minutos</div></div></div>
<div class="parada"><div class="parada-km">km 330</div><div class="parada-linea"><div class="parada-dot" style="background:#5C7A4A;"></div></div><div class="parada-content"><div class="parada-nombre" data-es="Acceso Salto del Agrio — Caviahue" data-en="Salto del Agrio Access — Caviahue" data-pt="Acesso Salto do Agrio — Caviahue">Acceso Salto del Agrio — Caviahue</div><div class="parada-tipo" data-es="📸 Foto imperdible antes de llegar" data-en="📸 Must-see photo stop before arrival" data-pt="📸 Foto imperdível antes de chegar">📸 Foto imperdible antes de llegar</div><div class="parada-desc" data-es="Desvío imperdible antes del pueblo: cascada volcánica de 45 metros de agua ácida color turquesa. Una de las más impactantes de la Patagonia." data-en="Unmissable detour before town: 45-meter volcanic waterfall with turquoise acidic water. One of Patagonia's most striking waterfalls." data-pt="Desvio imperdível antes do vilarejo: cachoeira vulcânica de 45 metros de água ácida turquesa.">Cascada volcánica de 45 metros de agua ácida turquesa. Imperdible antes de entrar al pueblo.</div><div class="parada-tiempo" data-es="⏱ 30 minutos" data-en="⏱ 30 minutes" data-pt="⏱ 30 minutos">⏱ 30 minutos</div></div></div>
</div>
</div>
<div class="ruta-card" onclick="this.classList.toggle('abierto')">
<div class="ruta-card-header">
<div class="ruta-card-header-left">
<div class="ruta-nombre" data-es="Neuquén → Corredor del Pehuén" data-en="Neuquén → Pehuén Corridor" data-pt="Neuquén → Corredor do Pehuén">Neuquén → Corredor del Pehuén</div>
<div class="ruta-tramo" data-es="RN 22 + RP 13 / RP 46 — Zapala · Primeros Pinos · Aluminé" data-en="RN 22 + RP 13 / RP 46 — Zapala · Primeros Pinos · Aluminé" data-pt="RN 22 + RP 13 / RP 46 — Zapala · Primeros Pinos · Aluminé">RN 22 + RP 13 / RP 46 — Zapala · Primeros Pinos · Aluminé</div>
<div class="ruta-meta">
<span class="ruta-badge">~280 km</span>
<span class="ruta-badge" data-es="4 paradas" data-en="4 stops" data-pt="4 paradas">4 paradas</span>
<span class="ruta-badge">RN 22 + RP 13</span>
</div>
</div>
<span class="ruta-arrow">▾</span>
</div>
<div class="ruta-body">
<div class="ruta-camino-aviso" data-es="⚠️ Tramos de ripio de montaña en RP 13 y RP 46. En invierno nieve posible. Verificar antes de salir." data-en="⚠️ Gravel mountain sections on RP 13 and RP 46. Snow possible in winter. Check before leaving." data-pt="⚠️ Trechos de cascalho de montanha na RP 13 e RP 46. Neve possível no inverno.">⚠️ Tramos de ripio de montaña en RP 13 y RP 46. En invierno nieve posible.</div>
<div class="parada"><div class="parada-km">km 100</div><div class="parada-linea"><div class="parada-dot" style="background:#B84E3A;"></div><div class="parada-stem"></div></div><div class="parada-content"><div class="parada-nombre" data-es="⛽ YPF Cutral Có / Plaza Huincul" data-en="⛽ YPF Cutral Có / Plaza Huincul" data-pt="⛽ YPF Cutral Có / Plaza Huincul">⛽ YPF Cutral Có / Plaza Huincul</div><div class="parada-tipo" data-es="🛢️ Carga en comarca petrolera" data-en="🛢️ Fuel in oil region" data-pt="🛢️ Abastecimento na região petrolífera">🛢️ Carga en comarca petrolera</div><div class="parada-desc" data-es="Carga de combustible y descanso en la comarca petrolera sobre RN 22 antes de llegar a Zapala." data-en="Fuel and rest stop in the oil region on RN 22 before reaching Zapala." data-pt="Abastecimento e descanso na região petrolífera na RN 22 antes de chegar a Zapala.">Carga y descanso en comarca petrolera antes de Zapala.</div><div class="parada-tiempo" data-es="⏱ 15 minutos" data-en="⏱ 15 minutes" data-pt="⏱ 15 minutos">⏱ 15 minutos</div></div></div>
<div class="parada"><div class="parada-km">km 190</div><div class="parada-linea"><div class="parada-dot" style="background:#B84E3A;"></div><div class="parada-stem"></div></div><div class="parada-content"><div class="parada-nombre" data-es="⛽ Zapala — Portal del Pehuén" data-en="⛽ Zapala — Pehuén Gateway" data-pt="⛽ Zapala — Portal do Pehuén">⛽ Zapala — Portal del Pehuén</div><div class="parada-tipo" data-es="🛢️ Carga obligatoria antes de la montaña" data-en="🛢️ Essential fuel before the mountains" data-pt="🛢️ Abastecimento essencial antes da montanha">🛢️ Carga obligatoria antes de la montaña</div><div class="parada-desc" data-es="Carga vital antes de encarar la montaña. Aquí elegís tu ruta: RP 13 a Villa Pehuenia o RP 46 a Aluminé." data-en="Essential fuel before heading into the mountains. Here you choose your route: RP 13 to Villa Pehuenia or RP 46 to Aluminé." data-pt="Abastecimento vital antes da montanha. Aqui você escolhe: RP 13 para Villa Pehuenia ou RP 46 para Aluminé.">Carga vital. Elegís tu ruta: RP 13 a Villa Pehuenia o RP 46 a Aluminé.</div><div class="parada-tiempo" data-es="⏱ 20 minutos" data-en="⏱ 20 minutes" data-pt="⏱ 20 minutos">⏱ 20 minutos</div></div></div>
<div class="parada"><div class="parada-km">km 235</div><div class="parada-linea"><div class="parada-dot"></div><div class="parada-stem"></div></div><div class="parada-content"><div class="parada-nombre" data-es="Parador Primeros Pinos (RP 13 → Pehuenia)" data-en="Primeros Pinos Stop (RP 13 → Pehuenia)" data-pt="Parador Primeros Pinos (RP 13 → Pehuenia)">Parador Primeros Pinos (RP 13 → Pehuenia)</div><div class="parada-tipo" data-es="🌲 Primer contacto con los Pehuenes" data-en="🌲 First encounter with Pehuén trees" data-pt="🌲 Primeiro contato com os Pehuenes">🌲 Primer contacto con los Pehuenes</div><div class="parada-desc" data-es="Primer bosque de Pehuenes (Araucarias) del recorrido. Zona de nieve en invierno. Parada obligatoria para fotos y descanso." data-en="First Pehuén (Araucaria) forest on the route. Snow zone in winter. Essential stop for photos and rest." data-pt="Primeira floresta de Pehuenes (Araucárias) do percurso. Zona de neve no inverno.">Primer bosque de Araucarias del recorrido. Zona de nieve en invierno. Parada para fotos.</div><div class="parada-tiempo" data-es="⏱ 20 minutos" data-en="⏱ 20 minutes" data-pt="⏱ 20 minutos">⏱ 20 minutos</div></div></div>
<div class="parada"><div class="parada-km">km 280</div><div class="parada-linea"><div class="parada-dot" style="background:#5C7A4A;"></div></div><div class="parada-content"><div class="parada-nombre" data-es="Mirador Cuesta del Rahue (RP 46 → Aluminé)" data-en="Cuesta del Rahue Viewpoint (RP 46 → Aluminé)" data-pt="Mirante Cuesta del Rahue (RP 46 → Aluminé)">Mirador Cuesta del Rahue (RP 46 → Aluminé)</div><div class="parada-tipo" data-es="🏔️ Zigzag panorámico impactante" data-en="🏔️ Stunning panoramic switchbacks" data-pt="🏔️ Zigue-zague panorâmico impressionante">🏔️ Zigzag panorámico impactante</div><div class="parada-desc" data-es="Tramo de zigzags con vista abierta a la Cordillera de los Andes y la cuenca del Río Aluminé. Una de las bajadas más espectaculares de Neuquén." data-en="Switchback section with open views of the Andes and the Aluminé River basin. One of Neuquén's most spectacular descents." data-pt="Trecho de zigue-zagues com vista aberta para a Cordilheira dos Andes e a bacia do Río Aluminé.">Zigzags con vista a la Cordillera y la cuenca del Río Aluminé. Bajada espectacular.</div><div class="parada-tiempo" data-es="⏱ 20 minutos" data-en="⏱ 20 minutes" data-pt="⏱ 20 minutos">⏱ 20 minutos</div></div></div>
</div>
</div>
</div>
<div style="padding:20px 16px 0;">
<div style="font-size:0.6rem;letter-spacing:0.16em;text-transform:uppercase;color:rgba(163,196,204,0.5);margin-bottom:12px;display:flex;align-items:center;gap:8px;" data-es="🛂 Pasos Fronterizos Argentina ↔ Chile" data-en="🛂 Border Crossings Argentina ↔ Chile" data-pt="🛂 Postos de Fronteira Argentina ↔ Chile">🛂 Pasos Fronterizos Argentina ↔ Chile<span style="flex:1;height:1px;background:rgba(163,196,204,0.15);display:inline-block;"></span></div>
<div style="display:flex;flex-direction:column;gap:8px;">
<div style="background:rgba(255,255,255,0.04);border:1px solid rgba(163,196,204,0.15);border-radius:8px;padding:14px;">
<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;">
<div style="flex:1;">
<div style="font-size:0.78rem;font-weight:600;color:rgba(250,247,242,0.9);" data-es="Paso Cardenal Samoré" data-en="Cardenal Samoré Pass" data-pt="Passo Cardenal Samoré">Paso Cardenal Samoré</div>
<div style="font-size:0.65rem;color:rgba(163,196,204,0.6);margin-top:2px;" data-es="Villa La Angostura ↔ Osorno / Puyehue · Asfaltado, operable casi todo el año" data-en="Villa La Angostura ↔ Osorno / Puyehue · Paved, open almost all year" data-pt="Villa La Angostura ↔ Osorno / Puyehue · Asfaltado, operável quase todo o ano">Villa La Angostura ↔ Osorno / Puyehue · Asfaltado</div>
<div style="font-size:0.62rem;color:rgba(163,196,204,0.4);margin-top:3px;" data-es="⏰ 08:00 a 19:00 hs · Sujeto a clima" data-en="⏰ 08:00 to 19:00 · Subject to weather" data-pt="⏰ 08:00 às 19:00 · Sujeito ao clima">⏰ 08:00 a 19:00 hs · Sujeto a clima</div>
</div>
<a href="tel:+5402944494004" style="flex-shrink:0;font-size:0.6rem;padding:6px 10px;background:rgba(61,107,115,0.3);border:1px solid rgba(61,107,115,0.4);border-radius:4px;color:rgba(163,196,204,0.8);text-decoration:none;white-space:nowrap;" data-es="📞 Gendarmería" data-en="📞 Border Control" data-pt="📞 Gendarmeria">📞 Gendarmería</a>
</div>
</div>
<div style="background:rgba(255,255,255,0.04);border:1px solid rgba(163,196,204,0.15);border-radius:8px;padding:14px;">
<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;">
<div style="flex:1;">
<div style="font-size:0.78rem;font-weight:600;color:rgba(250,247,242,0.9);" data-es="Paso Mamuil Malal / Tromen" data-en="Mamuil Malal / Tromen Pass" data-pt="Passo Mamuil Malal / Tromen">Paso Mamuil Malal / Tromen</div>
<div style="font-size:0.65rem;color:rgba(163,196,204,0.6);margin-top:2px;" data-es="Junín de los Andes ↔ Pucón / Curarrehue · Al pie del Volcán Lanín" data-en="Junín de los Andes ↔ Pucón / Curarrehue · At the foot of Volcán Lanín" data-pt="Junín de los Andes ↔ Pucón / Curarrehue · Ao pé do Volcán Lanín">Junín de los Andes ↔ Pucón / Curarrehue · Al pie del Volcán Lanín</div>
<div style="font-size:0.62rem;color:rgba(163,196,204,0.4);margin-top:3px;" data-es="⏰ 08:00 a 19:00 hs" data-en="⏰ 08:00 to 19:00" data-pt="⏰ 08:00 às 19:00">⏰ 08:00 a 19:00 hs</div>
</div>
<a href="tel:+5402972491122" style="flex-shrink:0;font-size:0.6rem;padding:6px 10px;background:rgba(61,107,115,0.3);border:1px solid rgba(61,107,115,0.4);border-radius:4px;color:rgba(163,196,204,0.8);text-decoration:none;white-space:nowrap;" data-es="📞 Gendarmería" data-en="📞 Border Control" data-pt="📞 Gendarmeria">📞 Gendarmería</a>
</div>
</div>
<div style="background:rgba(255,255,255,0.04);border:1px solid rgba(163,196,204,0.15);border-radius:8px;padding:14px;">
<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;">
<div style="flex:1;">
<div style="font-size:0.78rem;font-weight:600;color:rgba(250,247,242,0.9);" data-es="Paso Hua Hum" data-en="Hua Hum Pass" data-pt="Passo Hua Hum">Paso Hua Hum</div>
<div style="font-size:0.65rem;color:rgba(163,196,204,0.6);margin-top:2px;" data-es="San Martín de los Andes ↔ Pirihueico / Panguipulli · Requiere barcaza por Lago Pirihueico" data-en="San Martín de los Andes ↔ Pirihueico / Panguipulli · Ferry crossing on Lake Pirihueico required" data-pt="San Martín de los Andes ↔ Pirihueico / Panguipulli · Requer travessia de balsa pelo Lago Pirihueico">SMA ↔ Pirihueico / Panguipulli · Requiere barcaza por Lago Pirihueico</div>
<div style="font-size:0.62rem;color:rgba(163,196,204,0.4);margin-top:3px;" data-es="⏰ 08:00 a 20:00 hs · Paso de baja altura ideal en invierno" data-en="⏰ 08:00 to 20:00 · Low altitude pass, ideal in winter" data-pt="⏰ 08:00 às 20:00 · Passo de baixa altitude, ideal no inverno">⏰ 08:00 a 20:00 hs · Paso de baja altura, ideal en invierno</div>
</div>
<a href="tel:+5402972427348" style="flex-shrink:0;font-size:0.6rem;padding:6px 10px;background:rgba(61,107,115,0.3);border:1px solid rgba(61,107,115,0.4);border-radius:4px;color:rgba(163,196,204,0.8);text-decoration:none;white-space:nowrap;" data-es="📞 Gendarmería" data-en="📞 Border Control" data-pt="📞 Gendarmeria">📞 Gendarmería</a>
</div>
</div>
<div style="background:rgba(255,255,255,0.04);border:1px solid rgba(163,196,204,0.15);border-radius:8px;padding:14px;">
<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;">
<div style="flex:1;">
<div style="font-size:0.78rem;font-weight:600;color:rgba(250,247,242,0.9);" data-es="Paso Pino Hachado" data-en="Pino Hachado Pass" data-pt="Passo Pino Hachado">Paso Pino Hachado</div>
<div style="font-size:0.65rem;color:rgba(163,196,204,0.6);margin-top:2px;" data-es="Las Lajas / Zapala ↔ Temuco / Victoria · Eje comercial centro neuquino" data-en="Las Lajas / Zapala ↔ Temuco / Victoria · Central Neuquén commercial axis" data-pt="Las Lajas / Zapala ↔ Temuco / Victoria · Eixo comercial centro neuquino">Las Lajas / Zapala ↔ Temuco / Victoria · Eje comercial</div>
<div style="font-size:0.62rem;color:rgba(163,196,204,0.4);margin-top:3px;" data-es="⏰ 08:00 a 19:00 hs · Cadenas en invierno" data-en="⏰ 08:00 to 19:00 · Chains required in winter" data-pt="⏰ 08:00 às 19:00 · Correntes no inverno">⏰ 08:00 a 19:00 hs · Cadenas en invierno</div>
</div>
<a href="tel:+5402942499003" style="flex-shrink:0;font-size:0.6rem;padding:6px 10px;background:rgba(61,107,115,0.3);border:1px solid rgba(61,107,115,0.4);border-radius:4px;color:rgba(163,196,204,0.8);text-decoration:none;white-space:nowrap;" data-es="📞 Gendarmería" data-en="📞 Border Control" data-pt="📞 Gendarmeria">📞 Gendarmería</a>
</div>
</div>
<div style="background:rgba(255,255,255,0.04);border:1px solid rgba(163,196,204,0.15);border-radius:8px;padding:14px;">
<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;">
<div style="flex:1;">
<div style="font-size:0.78rem;font-weight:600;color:rgba(250,247,242,0.9);" data-es="Paso Icalma" data-en="Icalma Pass" data-pt="Passo Icalma">Paso Icalma</div>
<div style="font-size:0.65rem;color:rgba(163,196,204,0.6);margin-top:2px;" data-es="Villa Pehuenia ↔ Icalma / Melipeuco · Acceso al Parque Nacional Conguillío" data-en="Villa Pehuenia ↔ Icalma / Melipeuco · Access to Conguillío National Park" data-pt="Villa Pehuenia ↔ Icalma / Melipeuco · Acesso ao Parque Nacional Conguillío">Villa Pehuenia ↔ Icalma / Melipeuco · Acceso a Conguillío</div>
<div style="font-size:0.62rem;color:rgba(163,196,204,0.4);margin-top:3px;" data-es="⏰ 08:00 a 19:00 hs" data-en="⏰ 08:00 to 19:00" data-pt="⏰ 08:00 às 19:00">⏰ 08:00 a 19:00 hs</div>
</div>
<a href="tel:+5402942498010" style="flex-shrink:0;font-size:0.6rem;padding:6px 10px;background:rgba(61,107,115,0.3);border:1px solid rgba(61,107,115,0.4);border-radius:4px;color:rgba(163,196,204,0.8);text-decoration:none;white-space:nowrap;" data-es="📞 Gendarmería" data-en="📞 Border Control" data-pt="📞 Gendarmeria">📞 Gendarmería</a>
</div>
</div>
</div>
</div>
<div style="padding:20px 16px 0;">
<div style="font-size:0.6rem;letter-spacing:0.16em;text-transform:uppercase;color:rgba(163,196,204,0.5);margin-bottom:14px;display:flex;align-items:center;gap:8px;" data-es="🛂 Pasos Fronterizos — Contactos Binacionales" data-en="🛂 Border Crossings — Binational Contacts" data-pt="🛂 Postos de Fronteira — Contatos Binacionais">🛂 Pasos Fronterizos — Contactos Binacionales<span style="flex:1;height:1px;background:rgba(163,196,204,0.15);display:inline-block;"></span></div>
<div style="font-size:0.65rem;color:rgba(163,196,204,0.45);margin-bottom:12px;line-height:1.5;" data-es="Contactos de ambos lados de la cordillera — para argentinos que cruzan a Chile y para chilenos que cruzan a Argentina." data-en="Contacts on both sides of the Andes — for Argentines crossing to Chile and for Chileans crossing to Argentina." data-pt="Contatos dos dois lados da cordilheira — para argentinos que cruzam para o Chile e para chilenos que cruzam para a Argentina.">Contactos de ambos lados de la cordillera — para argentinos que cruzan a Chile y para chilenos que cruzan a Argentina.</div>
<div style="display:flex;flex-direction:column;gap:10px;">
<div style="background:rgba(255,255,255,0.04);border:1px solid rgba(163,196,204,0.15);border-radius:10px;overflow:hidden;">
<div style="padding:12px 14px;border-bottom:1px solid rgba(163,196,204,0.1);">
<div style="font-size:0.82rem;font-weight:600;color:rgba(250,247,242,0.9);margin-bottom:2px;" data-es="Paso Cardenal Samoré" data-en="Cardenal Samoré Pass" data-pt="Passo Cardenal Samoré">Paso Cardenal Samoré</div>
<div style="font-size:0.62rem;color:rgba(163,196,204,0.5);" data-es="Villa La Angostura ↔ Puyehue / Entre Lagos · Asfaltado · Todo el año" data-en="Villa La Angostura ↔ Puyehue / Entre Lagos · Paved · All year" data-pt="Villa La Angostura ↔ Puyehue / Entre Lagos · Asfaltado · Todo o ano">Villa La Angostura ↔ Puyehue / Entre Lagos · Asfaltado · Todo el año</div>
<div style="font-size:0.6rem;color:rgba(163,196,204,0.35);margin-top:3px;">⏰ 08:00 — 19:00 hs</div>
</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:0;">
<div style="padding:12px 14px;border-right:1px solid rgba(163,196,204,0.1);">
<div style="font-size:0.55rem;letter-spacing:0.1em;text-transform:uppercase;color:rgba(61,107,115,0.7);margin-bottom:8px;">🇦🇷 Lado Argentino</div>
<div style="font-size:0.68rem;color:rgba(250,247,242,0.7);margin-bottom:4px;" data-es="Gendarmería Nacional" data-en="Border Police" data-pt="Gendarmeria Nacional">Gendarmería Nacional</div>
<a href="tel:+5402944494184" style="display:block;font-size:0.65rem;color:rgba(163,196,204,0.6);text-decoration:none;margin-bottom:2px;">+54 294 449-4184</a>
<a href="tel:+5402944422735" style="display:block;font-size:0.65rem;color:rgba(163,196,204,0.6);text-decoration:none;margin-bottom:8px;">+54 294 442-2735</a>
<div style="font-size:0.68rem;color:rgba(250,247,242,0.7);margin-bottom:4px;" data-es="Migraciones / Aduana" data-en="Immigration / Customs" data-pt="Migrações / Aduana">Migraciones / Aduana</div>
<a href="tel:+5402944494113" style="display:block;font-size:0.65rem;color:rgba(163,196,204,0.6);text-decoration:none;">+54 294 449-4113</a>
</div>
<div style="padding:12px 14px;">
<div style="font-size:0.55rem;letter-spacing:0.1em;text-transform:uppercase;color:rgba(220,60,60,0.6);margin-bottom:8px;">🇨🇱 Lado Chileno</div>
<div style="font-size:0.68rem;color:rgba(250,247,242,0.7);margin-bottom:4px;">Carabineros</div>
<a href="tel:+56642233328" style="display:block;font-size:0.65rem;color:rgba(163,196,204,0.6);text-decoration:none;margin-bottom:2px;">+56 64 223 3328</a>
<a href="tel:133" style="display:block;font-size:0.65rem;color:rgba(163,196,204,0.6);text-decoration:none;margin-bottom:8px;">133 · Emergencias</a>
<div style="font-size:0.68rem;color:rgba(250,247,242,0.7);margin-bottom:4px;">PDI / SAG</div>
<a href="tel:+56642233300" style="display:block;font-size:0.65rem;color:rgba(163,196,204,0.6);text-decoration:none;">+56 64 223 3300</a>
</div>
</div>
</div>
<div style="background:rgba(255,255,255,0.04);border:1px solid rgba(163,196,204,0.15);border-radius:10px;overflow:hidden;">
<div style="padding:12px 14px;border-bottom:1px solid rgba(163,196,204,0.1);">
<div style="font-size:0.82rem;font-weight:600;color:rgba(250,247,242,0.9);margin-bottom:2px;" data-es="Paso Mamuil Malal / Tromen" data-en="Mamuil Malal / Tromen Pass" data-pt="Passo Mamuil Malal / Tromen">Paso Mamuil Malal / Tromen</div>
<div style="font-size:0.62rem;color:rgba(163,196,204,0.5);" data-es="Junín de los Andes ↔ Curarrehue / Pucón · Al pie del Volcán Lanín" data-en="Junín de los Andes ↔ Curarrehue / Pucón · At the foot of Volcán Lanín" data-pt="Junín de los Andes ↔ Curarrehue / Pucón · Ao pé do Volcán Lanín">Junín de los Andes ↔ Curarrehue / Pucón · Al pie del Volcán Lanín</div>
<div style="font-size:0.6rem;color:rgba(163,196,204,0.35);margin-top:3px;">⏰ 08:00 — 19:00 hs</div>
</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:0;">
<div style="padding:12px 14px;border-right:1px solid rgba(163,196,204,0.1);">
<div style="font-size:0.55rem;letter-spacing:0.1em;text-transform:uppercase;color:rgba(61,107,115,0.7);margin-bottom:8px;">🇦🇷 Lado Argentino</div>
<div style="font-size:0.68rem;color:rgba(250,247,242,0.7);margin-bottom:4px;" data-es="Gendarmería / Aduana" data-en="Border Police / Customs" data-pt="Gendarmeria / Aduana">Gendarmería / Aduana</div>
<a href="tel:+5402972491123" style="display:block;font-size:0.65rem;color:rgba(163,196,204,0.6);text-decoration:none;margin-bottom:2px;">+54 2972 49-1123</a>
<a href="tel:+5402972427388" style="display:block;font-size:0.65rem;color:rgba(163,196,204,0.6);text-decoration:none;">+54 2972 42-7388</a>
</div>
<div style="padding:12px 14px;">
<div style="font-size:0.55rem;letter-spacing:0.1em;text-transform:uppercase;color:rgba(220,60,60,0.6);margin-bottom:8px;">🇨🇱 Lado Chileno</div>
<div style="font-size:0.68rem;color:rgba(250,247,242,0.7);margin-bottom:4px;">Carabineros</div>
<a href="tel:+56452922110" style="display:block;font-size:0.65rem;color:rgba(163,196,204,0.6);text-decoration:none;margin-bottom:2px;">+56 45 292 2110</a>
<a href="tel:133" style="display:block;font-size:0.65rem;color:rgba(163,196,204,0.6);text-decoration:none;margin-bottom:8px;">133 · Emergencias</a>
<div style="font-size:0.68rem;color:rgba(250,247,242,0.7);margin-bottom:4px;">PDI / SAG</div>
<a href="tel:+56452922115" style="display:block;font-size:0.65rem;color:rgba(163,196,204,0.6);text-decoration:none;">+56 45 292 2115</a>
</div>
</div>
</div>
<div style="background:rgba(255,255,255,0.04);border:1px solid rgba(163,196,204,0.15);border-radius:10px;overflow:hidden;">
<div style="padding:12px 14px;border-bottom:1px solid rgba(163,196,204,0.1);">
<div style="font-size:0.82rem;font-weight:600;color:rgba(250,247,242,0.9);margin-bottom:2px;" data-es="Paso Hua Hum" data-en="Hua Hum Pass" data-pt="Passo Hua Hum">Paso Hua Hum</div>
<div style="font-size:0.62rem;color:rgba(163,196,204,0.5);" data-es="San Martín de los Andes ↔ Puerto Pirihueico / Panguipulli · Requiere barcaza" data-en="San Martín de los Andes ↔ Puerto Pirihueico / Panguipulli · Ferry required" data-pt="San Martín de los Andes ↔ Puerto Pirihueico / Panguipulli · Requer balsa">San Martín de los Andes ↔ Puerto Pirihueico · Requiere barcaza</div>
<div style="font-size:0.6rem;color:rgba(163,196,204,0.35);margin-top:3px;">⏰ 08:00 — 20:00 hs · Paso de baja altura, ideal en invierno</div>
</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:0;">
<div style="padding:12px 14px;border-right:1px solid rgba(163,196,204,0.1);">
<div style="font-size:0.55rem;letter-spacing:0.1em;text-transform:uppercase;color:rgba(61,107,115,0.7);margin-bottom:8px;">🇦🇷 Lado Argentino</div>
<div style="font-size:0.68rem;color:rgba(250,247,242,0.7);margin-bottom:4px;" data-es="Gendarmería Nacional" data-en="Border Police" data-pt="Gendarmeria Nacional">Gendarmería Nacional</div>
<a href="tel:+5402972427388" style="display:block;font-size:0.65rem;color:rgba(163,196,204,0.6);text-decoration:none;margin-bottom:8px;">+54 2972 42-7388</a>
<div style="font-size:0.68rem;color:rgba(250,247,242,0.7);margin-bottom:4px;" data-es="Prefectura Naval" data-en="Coast Guard" data-pt="Prefeitura Naval">Prefectura Naval</div>
<a href="tel:+5402972427208" style="display:block;font-size:0.65rem;color:rgba(163,196,204,0.6);text-decoration:none;">+54 2972 42-7208</a>
</div>
<div style="padding:12px 14px;">
<div style="font-size:0.55rem;letter-spacing:0.1em;text-transform:uppercase;color:rgba(220,60,60,0.6);margin-bottom:8px;">🇨🇱 Lado Chileno</div>
<div style="font-size:0.68rem;color:rgba(250,247,242,0.7);margin-bottom:4px;">Carabineros</div>
<a href="tel:+56632252120" style="display:block;font-size:0.65rem;color:rgba(163,196,204,0.6);text-decoration:none;margin-bottom:2px;">+56 63 225 2120</a>
<a href="tel:133" style="display:block;font-size:0.65rem;color:rgba(163,196,204,0.6);text-decoration:none;margin-bottom:8px;">133 · Emergencias</a>
<div style="font-size:0.68rem;color:rgba(250,247,242,0.7);margin-bottom:4px;" data-es="Barcaza / Horarios" data-en="Ferry / Schedule" data-pt="Balsa / Horários">Barcaza / Horarios</div>
<a href="tel:+56632310300" style="display:block;font-size:0.65rem;color:rgba(163,196,204,0.6);text-decoration:none;">+56 63 231 0300</a>
</div>
</div>
</div>
<div style="background:rgba(255,255,255,0.04);border:1px solid rgba(163,196,204,0.15);border-radius:10px;overflow:hidden;">
<div style="padding:12px 14px;border-bottom:1px solid rgba(163,196,204,0.1);">
<div style="font-size:0.82rem;font-weight:600;color:rgba(250,247,242,0.9);margin-bottom:2px;" data-es="Paso Pino Hachado" data-en="Pino Hachado Pass" data-pt="Passo Pino Hachado">Paso Pino Hachado</div>
<div style="font-size:0.62rem;color:rgba(163,196,204,0.5);" data-es="Las Lajas / Zapala ↔ Liucura / Lonquimay · Eje comercial · Cadenas en invierno" data-en="Las Lajas / Zapala ↔ Liucura / Lonquimay · Commercial axis · Chains in winter" data-pt="Las Lajas / Zapala ↔ Liucura / Lonquimay · Eixo comercial · Correntes no inverno">Las Lajas / Zapala ↔ Liucura / Lonquimay · Cadenas en invierno</div>
<div style="font-size:0.6rem;color:rgba(163,196,204,0.35);margin-top:3px;">⏰ 08:00 — 19:00 hs</div>
</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:0;">
<div style="padding:12px 14px;border-right:1px solid rgba(163,196,204,0.1);">
<div style="font-size:0.55rem;letter-spacing:0.1em;text-transform:uppercase;color:rgba(61,107,115,0.7);margin-bottom:8px;">🇦🇷 Lado Argentino</div>
<div style="font-size:0.68rem;color:rgba(250,247,242,0.7);margin-bottom:4px;" data-es="Gendarmería Nacional" data-en="Border Police" data-pt="Gendarmeria Nacional">Gendarmería Nacional</div>
<a href="tel:+5402942499003" style="display:block;font-size:0.65rem;color:rgba(163,196,204,0.6);text-decoration:none;margin-bottom:2px;">+54 2942 49-9003</a>
<a href="tel:+5402942499015" style="display:block;font-size:0.65rem;color:rgba(163,196,204,0.6);text-decoration:none;">+54 2942 49-9015</a>
</div>
<div style="padding:12px 14px;">
<div style="font-size:0.55rem;letter-spacing:0.1em;text-transform:uppercase;color:rgba(220,60,60,0.6);margin-bottom:8px;">🇨🇱 Lado Chileno</div>
<div style="font-size:0.68rem;color:rgba(250,247,242,0.7);margin-bottom:4px;">Carabineros</div>
<a href="tel:+56452922200" style="display:block;font-size:0.65rem;color:rgba(163,196,204,0.6);text-decoration:none;margin-bottom:2px;">+56 45 292 2200</a>
<a href="tel:133" style="display:block;font-size:0.65rem;color:rgba(163,196,204,0.6);text-decoration:none;margin-bottom:8px;">133 · Emergencias</a>
<div style="font-size:0.68rem;color:rgba(250,247,242,0.7);margin-bottom:4px;">PDI / SAG</div>
<a href="tel:+56452922210" style="display:block;font-size:0.65rem;color:rgba(163,196,204,0.6);text-decoration:none;">+56 45 292 2210</a>
</div>
</div>
</div>
<div style="background:rgba(255,255,255,0.04);border:1px solid rgba(163,196,204,0.2);border-radius:10px;padding:14px;margin-top:4px;">
<div style="font-size:0.6rem;letter-spacing:0.12em;text-transform:uppercase;color:rgba(163,196,204,0.5);margin-bottom:10px;" data-es="🏛️ Consulados — Asistencia al turista en tránsito" data-en="🏛️ Consulates — Tourist assistance in transit" data-pt="🏛️ Consulados — Assistência ao turista em trânsito">🏛️ Consulados — Asistencia al turista en tránsito</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
<div>
<div style="font-size:0.58rem;letter-spacing:0.1em;text-transform:uppercase;color:rgba(61,107,115,0.7);margin-bottom:6px;" data-es="🇦🇷 Para argentinos en Chile" data-en="🇦🇷 For Argentines in Chile" data-pt="🇦🇷 Para argentinos no Chile">🇦🇷 Para argentinos en Chile</div>
<div style="font-size:0.68rem;color:rgba(250,247,242,0.7);margin-bottom:3px;" data-es="Consulado en Puerto Montt" data-en="Consulate in Puerto Montt" data-pt="Consulado em Puerto Montt">Consulado en Puerto Montt</div>
<div style="font-size:0.6rem;color:rgba(163,196,204,0.45);margin-bottom:2px;" data-es="Cubre Frutillar, Puerto Varas, Osorno" data-en="Covers Frutillar, Puerto Varas, Osorno" data-pt="Cobre Frutillar, Puerto Varas, Osorno">Frutillar · Puerto Varas · Osorno</div>
<a href="tel:+56652253183" style="display:block;font-size:0.65rem;color:rgba(163,196,204,0.6);text-decoration:none;margin-bottom:2px;">+56 65 225 3183</a>
<a href="tel:+56998252004" style="display:block;font-size:0.65rem;color:rgba(163,196,204,0.6);text-decoration:none;margin-bottom:8px;">+56 9 9825 2004 · Guardia</a>
<div style="font-size:0.68rem;color:rgba(250,247,242,0.7);margin-bottom:3px;" data-es="Consulado en Valdivia" data-en="Consulate in Valdivia" data-pt="Consulado em Valdivia">Consulado en Valdivia</div>
<a href="tel:+56632215202" style="display:block;font-size:0.65rem;color:rgba(163,196,204,0.6);text-decoration:none;">+56 63 221 5202</a>
</div>
<div>
<div style="font-size:0.58rem;letter-spacing:0.1em;text-transform:uppercase;color:rgba(220,60,60,0.6);margin-bottom:6px;" data-es="🇨🇱 Para chilenos en Argentina" data-en="🇨🇱 For Chileans in Argentina" data-pt="🇨🇱 Para chilenos na Argentina">🇨🇱 Para chilenos en Argentina</div>
<div style="font-size:0.68rem;color:rgba(250,247,242,0.7);margin-bottom:3px;" data-es="Consulado en Bariloche" data-en="Consulate in Bariloche" data-pt="Consulado em Bariloche">Consulado en Bariloche</div>
<div style="font-size:0.6rem;color:rgba(163,196,204,0.45);margin-bottom:2px;" data-es="Cubre SMA, VLA, El Bolsón" data-en="Covers SMA, VLA, El Bolsón" data-pt="Cobre SMA, VLA, El Bolsón">SMA · VLA · El Bolsón</div>
<a href="tel:+5402944422842" style="display:block;font-size:0.65rem;color:rgba(163,196,204,0.6);text-decoration:none;margin-bottom:2px;">+54 294 442-2842</a>
<a href="tel:+5492944619252" style="display:block;font-size:0.65rem;color:rgba(163,196,204,0.6);text-decoration:none;margin-bottom:8px;">+54 9 294 461-9252 · Guardia</a>
<div style="font-size:0.68rem;color:rgba(250,247,242,0.7);margin-bottom:3px;" data-es="Consulado en Neuquén Capital" data-en="Consulate in Neuquén Capital" data-pt="Consulado em Neuquén Capital">Consulado en Neuquén Capital</div>
<a href="tel:+5402994422418" style="display:block;font-size:0.65rem;color:rgba(163,196,204,0.6);text-decoration:none;">+54 299 442-2418</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
`;

document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('encamino-container');
  if (container) {
    container.innerHTML = ENCAMINO_HTML;
  }
});
