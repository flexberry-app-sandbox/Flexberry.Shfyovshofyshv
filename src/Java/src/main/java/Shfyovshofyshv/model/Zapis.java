package Shfyovshofyshv.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Shfyovshofyshv.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: Запись
 */
@Entity(name = "IISShfyovshofyshvЗапись")
@Table(schema = "public", name = "Запись")
public class Zapis {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "КодЗаписи")
    private Integer кодзаписи;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "ТипОплаты")
    private String типоплаты;

    @Column(name = "Время")
    private String время;

    @Column(name = "Комментарий")
    private String комментарий;

    @Column(name = "Сумма")
    private Double сумма;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Pacient")
    @Convert("Pacient")
    @Column(name = "Пациент", length = 16, unique = true, nullable = false)
    private UUID _pacientid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Pacient", insertable = false, updatable = false)
    private Pacient pacient;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudnik")
    @Convert("Sotrudnik")
    @Column(name = "Сотрудник", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudnik", insertable = false, updatable = false)
    private Sotrudnik sotrudnik;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Adres")
    @Convert("Adres")
    @Column(name = "Адрес", length = 16, unique = true, nullable = false)
    private UUID _adresid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Adres", insertable = false, updatable = false)
    private Adres adres;

    @OneToMany(mappedBy = "zapis", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<ZakazTapochek> zakaztapocheks;

    @OneToMany(mappedBy = "zapis", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<ZakazSlancev> zakazslancevs;


    public Zapis() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКодЗаписи() {
      return кодзаписи;
    }

    public void setКодЗаписи(Integer кодзаписи) {
      this.кодзаписи = кодзаписи;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public String getТипОплаты() {
      return типоплаты;
    }

    public void setТипОплаты(String типоплаты) {
      this.типоплаты = типоплаты;
    }

    public String getВремя() {
      return время;
    }

    public void setВремя(String время) {
      this.время = время;
    }

    public String getКомментарий() {
      return комментарий;
    }

    public void setКомментарий(String комментарий) {
      this.комментарий = комментарий;
    }

    public Double getСумма() {
      return сумма;
    }

    public void setСумма(Double сумма) {
      this.сумма = сумма;
    }


}