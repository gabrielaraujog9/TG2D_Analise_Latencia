package com.tg2d;

import java.io.IOException;

import org.json.JSONObject;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;



public class ServiceApi {
  private String url = "http://localhost:3000/data/";
  private long[][] data;

  public ServiceApi(long[][] data) {
    this.data = data;
  }

  /**
   * @return
   */
  public boolean createRequest() {
    OkHttpClient client = new OkHttpClient();

    MediaType mediaType = MediaType.parse("application/json;charset=utf-8");
    JSONObject dataJSON = new JSONObject();
    dataJSON.put("data", data);
    RequestBody body = RequestBody.create(dataJSON.toString(), mediaType);
    Request request = new Request.Builder()
        .url(url)
        .post(body)
        .addHeader("content-type", "application/json")
        .addHeader("cache-control", "no-cache")
        .addHeader("postman-token", "69cb9e69-a2e2-952f-4467-0107c6427794")
        .build();

    try {
      Response response = client.newCall(request).execute();
      if(response.code() == 201){
        return true;
      }
      else{
        return false;
      }
    } catch (IOException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
      return false;
    }
    
  }
}
