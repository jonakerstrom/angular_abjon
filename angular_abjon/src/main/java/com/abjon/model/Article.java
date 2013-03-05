package com.abjon.model;

import javax.persistence.Entity;
import java.io.Serializable;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Version;
import java.lang.Override;
import java.lang.Double;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
@Entity
public class Article implements Serializable
{

   @Id
   private @GeneratedValue(strategy = GenerationType.AUTO)
   @Column(name = "id", updatable = false, nullable = false)
   Long id = null;
   @Version
   private @Column(name = "version")
   int version = 0;

   @Column
   private String article;

   @Column
   private Double latitude;

   @Column
   private Double longitude;

   public Long getId()
   {
      return this.id;
   }

   public void setId(final Long id)
   {
      this.id = id;
   }

   public int getVersion()
   {
      return this.version;
   }

   public void setVersion(final int version)
   {
      this.version = version;
   }

   @Override
   public boolean equals(Object that)
   {
      if (this == that)
      {
         return true;
      }
      if (that == null)
      {
         return false;
      }
      if (getClass() != that.getClass())
      {
         return false;
      }
      if (id != null)
      {
         return id.equals(((Article) that).id);
      }
      return super.equals(that);
   }

   @Override
   public int hashCode()
   {
      if (id != null)
      {
         return id.hashCode();
      }
      return super.hashCode();
   }

   public String getArticle()
   {
      return this.article;
   }

   public void setArticle(final String article)
   {
      this.article = article;
   }

   public Double getLatitude()
   {
      return this.latitude;
   }

   public void setLatitude(final Double latitude)
   {
      this.latitude = latitude;
   }

   public Double getLongitude()
   {
      return this.longitude;
   }

   public void setLongitude(final Double longitude)
   {
      this.longitude = longitude;
   }

   public String toString()
   {
      String result = "";
      if (article != null && !article.trim().isEmpty())
         result += article;
      if (latitude != null)
         result += " " + latitude;
      if (longitude != null)
         result += " " + longitude;
      return result;
   }
}