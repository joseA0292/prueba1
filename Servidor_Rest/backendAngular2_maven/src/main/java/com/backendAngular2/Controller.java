package com.backendAngular2;

import java.util.ArrayList;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
/**
 * 
 * @author Roberto
 * Clase controladora que responde a las peticiones http.
 */
@RestController
@RequestMapping(value="/palabras")
@CrossOrigin(methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
		RequestMethod.DELETE })
public class Controller {
	
	/**
	 * Metodo que retorna la lista de heroes;
	 * @return retorna la lista de heroes;
	 */
	@RequestMapping( value="/getPalabras", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ArrayList<Palabra> getPalabra(){
		return Palabras.getLista();
	}
	
	/**
	 * Metodo que instarta un nuevo heroe en la lista
	 * @param heroe
	 */
	@RequestMapping( value="/putPalabra", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Palabra> puttHeroe(@RequestBody Palabra palabra){
		Palabras.putNewPalabra(palabra);
		return new ResponseEntity<>( HttpStatus.OK);
	}
	
	/**
	 * Método que borra un heroe de la lista
	 * @param idHeroe
	 */
	@RequestMapping( value="/deletePalabra", method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public void deletetHeroe(@RequestBody long nivelPalabra){
		Palabras.deletePalabra(nivelPalabra);
	}
	/**
	 * metodo que devuelve un heroe mediante un id
	 * @param idHeroe
	 * @return Heroe filtrado
	 */
	@RequestMapping( value="/getHeroe/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Palabra getHeroe(@PathVariable long nivelPalabra){
		return Palabras.getPalabra(nivelPalabra);
	}
	
}
