package com.tg2d;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Scanner;
import java.awt.Desktop;
import java.io.IOException;

public class AppAnaliseLatencia 
{
    public static void main( String[] args ) throws URISyntaxException, IOException
    {
        
        Scanner scan = new Scanner(System.in);

        System.out.println();
        System.out.println( "***** Bem vindo ao TG2D - Análise de Latência *****\n" );
        System.out.print( "Digite o site/IP do que precisa análisar: " );
        String address = scan.next();
        System.out.println();
        System.out.print( "Digite o tempo em que precisa que seja executado: " );
        int timeout = scan.nextInt();
        System.out.println();
        scan.close();
        Verification verificarLatencia = new Verification(address, timeout);
        verificarLatencia.start();
        long[][] millis = verificarLatencia.resultVerification();

        ServiceApi serviceApi = new ServiceApi(millis);
        boolean verificacao = serviceApi.createRequest();
        
        
        if(verificacao){
            System.out.println("Abrindo Página!");
            URI link = new URI("https://projetotg2d.azurewebsites.net/");
            Desktop.getDesktop().browse(link);
        }
        else{
            System.out.println("Erro ao fazer a requisição!");
        }
        
    }
}

//www.dw.com