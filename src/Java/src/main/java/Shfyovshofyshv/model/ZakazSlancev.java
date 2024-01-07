package Shfyovshofyshv.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Shfyovshofyshv.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ЗаказСланцев
 */
@Entity(name = "IISShfyovshofyshvЗаказСланцев")
@Table(schema = "public", name = "ЗаказСланцев")
public class ZakazSlancev {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Комментарий")
    private String комментарий;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Slancy")
    @Convert("Slancy")
    @Column(name = "Сланцы", length = 16, unique = true, nullable = false)
    private UUID _slancyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Slancy", insertable = false, updatable = false)
    private Slancy slancy;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Zapis")
    @Convert("Zapis")
    @Column(name = "Запись", length = 16, unique = true, nullable = false)
    private UUID _zapisid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Zapis", insertable = false, updatable = false)
    private Zapis zapis;


    public ZakazSlancev() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getКомментарий() {
      return комментарий;
    }

    public void setКомментарий(String комментарий) {
      this.комментарий = комментарий;
    }


}