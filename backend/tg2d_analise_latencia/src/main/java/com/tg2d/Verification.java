package com.tg2d;


import java.io.IOException;
import java.net.InetAddress;
import java.net.UnknownHostException;


public class Verification {
  private InetAddress address;
  private long nanos;
  private long[][] millis;
  private long iterations;
  private int timeout;

  public Verification(String site, int timeout){
    try {
      this.address = InetAddress.getByName(site);
    } catch (UnknownHostException e) {
      System.out.println("Cannot lookup host " + site);
      return;
    }
    this.timeout = timeout * 1000;
    this.iterations = 0;
    this.nanos = 0;
    this.millis = new long[timeout * 2][2];
    
  }

  public void start(){
    try{
      if(address.isReachable(5000)){
        long comparacao = System.currentTimeMillis();
        long time = 0;
        while (comparacao + this.timeout > System.currentTimeMillis()) {
          iterations++;
          try{
            nanos = System.nanoTime();
            address.isReachable(500);
            nanos = System.nanoTime()-nanos;
          }catch(IOException e){
            System.out.println("Failed to reach host");
          }
          time = time + 5000;
          millis[(int)iterations - 1][0] = time;
          millis[(int)iterations - 1][1] = Math.round(nanos / Math.pow(10, 6));
          System.out.println("Resposta com tempo de = " + millis[(int)iterations - 1][1] + " ms");
          try{
            Thread.sleep(Math.max(0, 500 - millis[(int)iterations - 1][1]));
          }catch(InterruptedException e){
            break;
          }
        }
        System.out.println("Interações: " + iterations);
      } else {
        System.out.println("Host " + address.getHostName() + " is not reachable even once.");

      }

    }catch(IOException e){
      System.out.println("Network error.");
    }

  }

  public long[][] resultVerification(){
    
    return millis;
  }
}
