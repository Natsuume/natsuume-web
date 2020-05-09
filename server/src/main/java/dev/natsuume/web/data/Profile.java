package dev.natsuume.web.data;

public class Profile {
  private final String name;
  private final String description;
  private final String imageUrl;

  public Profile(String name, String description, String imageUrl) {
    this.name = name;
    this.description = description;
    this.imageUrl = imageUrl;
  }

}
