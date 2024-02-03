    document.getElementById("departments").addEventListener("change", function() {
        var deparmentsSelect = this.value;
        var selectMunic = document.getElementById("muni");
        selectMunic.innerHTML = ""; // Limpiar las opciones existentes
    
        // Definir las opciones basadas en la selección de Select A
        if (deparmentsSelect === "Ant") {
            agregarOpcion(selectMunic, "default", "select");
            agregarOpcion(selectMunic, "MagMed", "Magdalena Medio");
            agregarOpcion(selectMunic, "BajCauc", "Bajo Cauca");
        } else if (deparmentsSelect === "Atl") {
            agregarOpcion(selectMunic, "default", "select");
            agregarOpcion(selectMunic, "Barr", "Barranquilla");
            agregarOpcion(selectMunic, "Cand", "Candelaria");
        } else if (deparmentsSelect === "Bol") {
            agregarOpcion(selectMunic, "default", "select");
            agregarOpcion(selectMunic, "CartIndias", "Cartagena de Indias");
            agregarOpcion(selectMunic, "BarrLoba", "Barranco de Loba");
        }else{
            agregarOpcion(selectMunic, "default", "No seleccionaste Departamento");
        }
    });
    function agregarOpcion(select, valor, texto) {
        var opcion = document.createElement("option");
        opcion.value = valor;
        opcion.text = texto;
        select.add(opcion);
    }