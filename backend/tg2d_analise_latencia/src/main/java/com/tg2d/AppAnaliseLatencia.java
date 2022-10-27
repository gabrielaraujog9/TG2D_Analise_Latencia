package com.tg2d;

import java.util.Scanner;
public class AppAnaliseLatencia 
{
    public static void main( String[] args )
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
        
        for(int i = 0; i < millis.length; i++) {
        	System.out.println(millis[i][0]);
        	System.out.println(millis[i][1]);
        }
        
    }
}
