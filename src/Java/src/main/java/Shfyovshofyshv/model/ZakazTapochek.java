package Shfyovshofyshv.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Shfyovshofyshv.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ЗаказТапочек
 */
@Entity(name = "IISShfyovshofyshvЗаказТапочек")
@Table(schema = "public", name = "ЗаказТапочек")
public class ZakazTapochek {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Tapochki")
    @Convert("Tapochki")
    @Column(name = "Тапочки", length = 16, unique = true, nullable = false)
    private UUID _tapochkiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Tapochki", insertable = false, updatable = false)
    private Tapochki tapochki;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Zapis")
    @Convert("Zapis")
    @Column(name = "Запись", length = 16, unique = true, nullable = false)
    private UUID _zapisid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Zapis", insertable = false, updatable = false)
    private Zapis zapis;


    public ZakazTapochek() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }


}