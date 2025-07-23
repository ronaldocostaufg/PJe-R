from django.db import models

class Material(models.Model):
    CO_MAT = models.DecimalField(max_digits=10, decimal_places=0, null=False, blank=False, primary_key=True)
    QT_SALDO_MES_ANT = models.DecimalField(max_digits=7, decimal_places=0, null=False, blank=False)
    VL_MES_ANT = models.DecimalField(max_digits=13, decimal_places=2, null=False, blank=False)
    QT_ENTR_MES = models.DecimalField(max_digits=7, decimal_places=0, null=False, blank=False)
    VL_ENTR_MES = models.DecimalField(max_digits=13, decimal_places=2, null=False, blank=False)
    QT_SAIDA_MES_MAT = models.DecimalField(max_digits=7, decimal_places=0, null=False, blank=False)
    VL_SAIDA_MES = models.DecimalField(max_digits=13, decimal_places=2, null=False, blank=False)
    QT_SALDO_ATU = models.DecimalField(max_digits=7, decimal_places=0, null=False, blank=False)
    VL_ATU = models.DecimalField(max_digits=13, decimal_places=2, null=False, blank=False)
    QT_SALDO_ANO_ANT = models.DecimalField(max_digits=7, decimal_places=0, null=False, blank=False)
    VL_ANO_ANT = models.DecimalField(max_digits=13, decimal_places=2, null=False, blank=False)
    QT_ENTR_ATE_MES_ANT = models.DecimalField(max_digits=7, decimal_places=0, null=False, blank=False)
    VL_ENTR_ATE_MES_ANT = models.DecimalField(max_digits=13, decimal_places=2, null=False, blank=False)
    QT_SAIDA_ATE_MES_ANT = models.DecimalField(max_digits=7, decimal_places=0, null=False, blank=False)
    VL_SAIDA_ATE_MES_ANT = models.DecimalField(max_digits=13, decimal_places=2, null=False, blank=False)
    QT_RESERVADA = models.DecimalField(max_digits=7, decimal_places=0, null=False, blank=False)
    QT_ESTQ_MAX = models.DecimalField(max_digits=7, decimal_places=0, null=False, blank=False)
    QT_ESTQ_MIN = models.DecimalField(max_digits=7, decimal_places=0, null=False, blank=False)
    TI_FINALIDADE = models.DecimalField(max_digits=2, decimal_places=0, null=False, blank=False)
    NU_PED_COMPRA = models.DecimalField(max_digits=8, decimal_places=0, null=False, blank=False)
    QT_MEDIA_CONSUMO = models.DecimalField(max_digits=7, decimal_places=0, null=False, blank=False)
    QT_MES_AQUIS = models.DecimalField(max_digits=2, decimal_places=0, null=False, blank=False)
    QT_INTERVALO_AQUIS = models.DecimalField(max_digits=7, decimal_places=0, null=False, blank=False)
    QT_FRACAO_AQUIS = models.DecimalField(max_digits=5, decimal_places=3, null=False, blank=False)
    FG_SUPRIM_AUTOM = models.CharField(max_length=1, null=False, blank=False)
    FG_PED_COMPRA = models.CharField(max_length=1, null=False, blank=False)
    CO_UNID_MEDIDA = models.CharField(max_length=3, null=False, blank=False)
    CO_UNID_COMPRA = models.CharField(max_length=3, null=False, blank=False)
    CO_OPERACAO = models.DecimalField(max_digits=1, decimal_places=0, null=False, blank=False)
    VL_OPERADOR = models.DecimalField(max_digits=8, decimal_places=2, null=False, blank=False)
    DE_MAT = models.TextField(null=False, blank=False)
    DE_COMPRA = models.TextField(null=False, blank=False)
    DE_COMPRA_COMPL = models.TextField(null=False, blank=False)
    DT_PED_COMPRA = models.DateField(null=False, blank=False)
    FG_ANALISADO = models.CharField(max_length=1, null=False, blank=False)
    FG_DESUSO = models.CharField(max_length=1, null=False, blank=False)
    QT_MEDIA_CONSUMO_2 = models.DecimalField(max_digits=7, decimal_places=0, null=False, blank=False)
    QT_SALDO_VALIDADE = models.DecimalField(max_digits=7, decimal_places=0, null=False, blank=False)
    CO_MAT_SIASG = models.CharField(max_length=9, null=False, blank=False)
    DE_COMPRA_CLOB = models.TextField(null=False, blank=False)  # Use TextField for CLOB data type
    FG_SUSTENTAVEL = models.CharField(max_length=1, default='N', null=False, blank=False)
    FG_CARTUCHO = models.CharField(max_length=1, default='N', null=False, blank=False)
    FG_CONSUMO_IMEDIATO = models.CharField(max_length=1, default='N', null=False, blank=False)
    IMAGEM_MATERIAL = models.BinaryField(null=False, blank=False)  # Use BinaryField for BLOB data type

    class Meta:
        db_table = 'MATERIAL'  # Ensure the table name is correct
        managed = False  # Keep it as False to avoid migrations on the read-only DB

    def __str__(self):
        return str(self.CO_MAT)  # CO_MAT is now the primary key

