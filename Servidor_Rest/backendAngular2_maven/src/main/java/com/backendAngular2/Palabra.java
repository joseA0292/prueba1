package com.backendAngular2;

import java.io.Serializable;

public class Palabra implements Serializable{

	private Long nivel;
	private String palabra;
	private String pista;
	
	public Palabra(){
		
	}
	public Palabra (Long nivel , String palabra, String pista){
		this.nivel = nivel;
		this.palabra = palabra;
		this.pista = pista;
	}
	public Palabra(String palabra, String pista){
		this.palabra = palabra;
		this.pista = pista;
		this.nivel = (long) Palabras.getLista().size() + 1;
	}
	public Long getNivel() {
		return nivel;
	}
	public void setNivel(Long nivel) {
		this.nivel = nivel;
	}
	public String getPalabra() {
		return palabra;
	}
	public void setPalabra(String palabra) {
		this.palabra = palabra;
	}
	public String getPista() {
		return pista;
	}
	public void setPista(String pista) {
		this.pista = pista;
	}
	
}
