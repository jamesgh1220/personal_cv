import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, SplitText, ScrollToPlugin);

export function animationsGsap() {
  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: target,
          offsetY: 0, // puedes ajustar el margen superior si tienes navbar fija
        },
        ease: "slow(0.8, 0.7, false)",
      });
    }
  };
  /**
   * Este bloque inicializa y ejecuta una animación compleja con GSAP y ScrollTrigger
   * que simula la expansión de un círculo desde un carácter específico ("?")
   * y revela contenido adicional de forma inmersiva.
   */
  const pointEntrance = () => {
    /**
     * 🔹 Elementos clave del DOM usados en la animación
     */
    const hero = document.getElementById("hero"); // Sección principal que será fijada durante la animación
    const name = document.getElementById("name"); // Elemento del título "name ?"
    const mark = name.querySelector("span"); // Carácter específico ("?") desde donde el círculo crecerá
    const dot = document.querySelector(".dot"); // Elemento circular blanco animado

    /**
     * 🔹 Configuración inicial del círculo `.dot`
     *
     * Este bloque garantiza que el círculo esté perfectamente centrado
     * y sea lo suficientemente grande para cubrir toda la pantalla al escalarse.
     */
    gsap.set(dot, {
      width: "125vmax", // Cubre el mayor tamaño posible entre alto y ancho del viewport
      height: "125vmax",
      xPercent: -50, // Centrado horizontal: traslada el 50% del ancho hacia la izquierda
      yPercent: -50, // Centrado vertical: traslada el 50% del alto hacia arriba
      top: "50%", // Ubica el centro del círculo verticalmente en el centro de la sección
      left: "50%", // Ubica el centro del círculo horizontalmente en el centro de la sección
    });

    /**
     * 🔹 Línea de tiempo GSAP con ScrollTrigger
     *
     * Crea una animación anclada al scroll del usuario, donde:
     * - Se fija la sección en pantalla
     * - Se sincroniza la animación con el avance del scroll (scrub)
     * - Se actualizan posiciones dinámicas al hacer resize o refresh
     */
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: hero, // Elemento que activa el ScrollTrigger
        start: "top top", // Inicia cuando la parte superior del `hero` toca la parte superior del viewport
        end: "+=75%", // Termina cuando la parte inferior del `hero` llega al tope del viewport
        scrub: 1.5, // Sincroniza el progreso de la animación con el desplazamiento (con retardo de 1.5s)
        pin: hero, // Fija la sección mientras se desarrolla la animación
        pinSpacing: true, // Mantiene espacio visual tras la sección fijada
        invalidateOnRefresh: true, // Recalcula coordenadas al redimensionar o refrescar la página
      },
      defaults: { ease: "slow(0.8, 0.7, false)" }, // Usar animación lineal por defecto en los pasos (sin interpolación)
    });

    /**
     * 🔹 Paso 1: Aparecer el título principal
     *
     * Transición simple de opacidad para hacer visible el título
     */
    tl1
      /**
       * Crea la animación del punto blanco desde el carácter "?" hasta llenar toda la pantalla
       * Calcula dinámicamente la posición de inicio usando el DOM actual
       */
      .fromTo(
        dot,
        {
          scale: 0, // Comienza invisible (tamaño cero)
          x: () => {
            const markBounds = mark.getBoundingClientRect();
            const heroBounds = hero.getBoundingClientRect();
            const px = markBounds.left + markBounds.width * 0.54; // Centro horizontal del "?"
            return px - (heroBounds.left + heroBounds.width / 2); // Posición relativa al centro del `hero`
          },
          y: () => {
            const markBounds = mark.getBoundingClientRect();
            const heroBounds = hero.getBoundingClientRect();
            const py = markBounds.top + markBounds.height * 0.73; // Punto inferior del "?"
            return py - (heroBounds.top + heroBounds.height / 2); // Posición relativa al centro del `hero`
          },
        },
        {
          x: 0, // Termina centrado horizontalmente
          y: 0, // Termina centrado verticalmente
          duration: 2.5,
          ease: "slow(0.8, 0.7, false)",
          scale: 1, // Escala total: el punto ahora cubre toda la pantalla
        }
      )
      // Revela el contenido de la "segunda sección" DENTRO del punto
      .fromTo("#next-content", { opacity: 0 }, { opacity: 1 }, "+=0.3");
  };

  const splitText = async () => {
    await document.fonts.ready;
    gsap.set(".split", { opacity: 1 });

    let split = SplitText.create(".split", {
      type: "chars, words",
      mask: "chars",
    });

    let tween = gsap.from(split.chars, {
      duration: 0.6,
      yPercent: "random([-150, 150])",
      xPercent: "random([-150, 150])",
      stagger: {
        from: "random",
        amount: 0.6,
      },
      ease: "power3.out",
    });

    tween.timeScale(0.5).play(0);
  };

  return {
    splitText,
    pointEntrance,
    scrollToSection,
  };
}
