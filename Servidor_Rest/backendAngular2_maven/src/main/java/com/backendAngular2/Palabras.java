package com.backendAngular2;

import java.util.ArrayList;


/**
 * @author Roberto
 * Clase estatica que sevirá a modo de BD para el 
 * servidor creado.
 */
public class Palabras {
	private static ArrayList<Palabra> lista = null;	
	/**
	 * Devuelve la lista de heroes
	 * @return la lista de heroes
	 */
	public static ArrayList<Palabra> getLista(){
		if(lista == null){
			lista = new ArrayList<Palabra>();
			lista.add(new Palabra((long)1, "PALABRA", "Soy una pista"));
			lista.add(new Palabra((long)2, "ARBOL", "Soy una pista"));
			lista.add(new Palabra((long)3, "PELOTA", "Soy una pista"));
			lista.add(new Palabra((long)4, "RISA", "Soy una pista"));
			lista.add(new Palabra((long)5, "HOLA", "Soy una pista"));
			lista.add(new Palabra((long)6, "QUE", "Soy una pista"));
			lista.add(new Palabra((long)7, "CARA", "Soy una pista"));
			

		}
		return lista;
	}
	/**
	 * Introduce un nuevo heroe
	 * @param heroe
	 */
	public static void putNewPalabra(Palabra palabra){
		lista.add(palabra);
	}
	/**
	 * Borra un heroe por el id pasado
	 * @param idHeroe
	 */
	public static void deletePalabra(long nivelPalabra){
		for(Palabra palabra : lista){
			if(palabra.getNivel() == nivelPalabra){
				lista.remove(palabra);
				break;
			}
		}
	}
	
	/**
	 * Devuelve un heroe de la lista 
	 * si este existe en la lista
	 * @param idHeroe
	 * @return heroe de la lista / null
	 */
	public static Palabra getPalabra(long nivelPalabra){
		Palabra palab = null;
		for(Palabra palabra: lista){
			if(palabra.getNivel() == nivelPalabra){
				palab = palabra;
				break;
			}
		}
		return palab;
	}
}
