<template>
    <div class="dispach-label">
        <b-tabs>
            <b-tab title="Impressão" active>
                <section class="separate">
                    <h1 class="title"></h1>
                </section>
                <b-card>
                    <div class="table-responsive">
                        <b-table :items="products" :fields="fields" class="table specific table-specific">
                            <template slot="process" slot-scope="row">
                                <div class="rigth-especific">
                                    <b-button size="sm" @click="clickReport(row.item)" class="mr-2">
                                        Download
                                    </b-button>
                                </div>
                            </template>
                        </b-table>
                    </div>
                </b-card>
            </b-tab>
            <b-tab title="Reempressão" >
                <section class="separate">
                    <h1 class="title"></h1>
                </section>
                <b-card>
                    <div class="table-responsive">
                        <div>
                            <b-form-group horizontal label="Filtro" class="mb-0">
                                <b-input-group>
                                    <b-form-input v-model="filter" placeholder="O que deseja buscar?" />
                                    <b-input-group-append>
                                        <b-btn :disabled="!filter" @click="filter = ''">Limpar</b-btn>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </div>
                        <section class="separate">
                            <h1 class="title"></h1>
                        </section>
                        <b-table 
                            :items="reprintProducts" 
                            :fields="fieldsReprint"
                            :current-page="currentPage"
                            :per-page="perPage" 
                            :filter="filter"
                            @filtered="onFiltered"
                            class="table specific table-specific">
                            <template slot="process" slot-scope="row">
                                <div class="rigth-especific">
                                    <b-button size="sm" @click="clickRePrintReport(row.item)" class="mr-2">
                                        Download
                                    </b-button>
                                </div>
                            </template>
                        </b-table>
                        <!-- <b-row> -->
                            <!-- <b-col > -->
                                <b-pagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" class="my-0" />
                            <!-- </b-col> -->
                        <!-- </b-row> -->
                    </div>
                </b-card>
            </b-tab>
        </b-tabs>

        

        <b-modal ref="myModalRef" no-close-on-esc no-close-on-backdrop id="modal1" centered class="text-center"  hide-footer hide-header>
            <div v-show="loadingImport" style="width: 100%; text-align: center;">
                <img alt="" src="@/assets/loading-image.gif">
            </div>
        </b-modal>

    </div>
</template>

<script>
import {baseApiUrl} from "@/global"
import axios from "axios"


export default {
    name: "Category",
    data() {
        return {
            loading: true,
            loadingImport: true,
            linkPrint: '',
            fields: [ { key: 'product_id', label: 'id Produto' }, { key: 'labelName', label : 'Nome Produdo'}, { key:'amount', label: 'Quantidade'}, { key:'process', label: ''} ],
            fieldsReprint: [ { key: 'id', label: 'Lote' }, { key: 'product_id', label: 'id Produto' }, { key: 'labelName', label : 'Nome Produdo'}, { key:'registryDate', label: 'Data de Registro'}, { key:'amount', label: 'Quantidade'}, { key:'whoprint', label: 'Usuario'}, { key:'process', label: ''} ],
            products : [],
            reprintProducts: [],
            wrapped : [],
            currentPage: 1,
            perPage: 5,
            totalRows: 0,
            pageOptions: [ 5, 10, 15 ],
            filter: null,
            modalInfo: { title: '', content: '' }
        }
    },

    mounted() {
        axios.get(`${baseApiUrl}/api/gettoasttobeprintheader/2/company`).then(res=> {
            this.products = res.data;
        });

        axios.get(`${baseApiUrl}/api/listlotesprintedheader`).then(res=> {
            this.reprintProducts = res.data;
            this.totalRows = this.reprintProducts.length;
        });
    },

    methods: {
        clickReport : function (product) {
            this.loadingImport = true;
            this.$refs.myModalRef.show();
            axios.get(`${baseApiUrl}/api/downloadzipheader/`+ product.product_id + "/928987/"+product.labelName ).then(res=> {
                var sampleArr = base64ToArrayBuffer(res.data);
                saveByteArray("brinde-fim-de-ano", sampleArr);
                axios.get(`${baseApiUrl}/api/gettoasttobeprintheader/2/company`).then(res=> {
                    this.products = res.data;
                    this.loadingImport = true;
                    this.$refs.myModalRef.hide();
                });
            })
        },
        clickRePrintReport : function (lote) {
            this.loadingImport = true;
            this.$refs.myModalRef.show();
            axios.get(`${baseApiUrl}/api/downloadfile/`+lote.id).then(res=> {
                this.wrapped = res.data;
                if(this.wrapped != 'Arquivo não encontrado') {
                    var sampleArr = base64ToArrayBuffer(this.wrapped);
                    saveByteArrayTypeFile("brinde-fim-de-ano", sampleArr, res.headers['content-type']);
                    this.loadingImport = true;
                    this.$refs.myModalRef.hide();
                } else {
                   this.loadingImport = true;
                   this.$refs.myModalRef.hide();
                }
            })
        },
        onFiltered (filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
            this.totalRows = filteredItems.length
            this.currentPage = 1
        }
    }
}

function base64ToArrayBuffer(base64) {
    var binaryString = window.atob(base64);
    var binaryLen = binaryString.length;
    var bytes = new Uint8Array(binaryLen);
    for (var i = 0; i < binaryLen; i++) {
       var ascii = binaryString.charCodeAt(i);
       bytes[i] = ascii;
    }
    return bytes;
 }

 function saveByteArray(reportName, byte) {
    var blob = new Blob([byte], {type: "application/zip"});
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    var fileName = reportName;
    link.download = fileName;
    link.click();
 }
 function saveByteArrayTypeFile(reportName, byte, typeFile) {
    var blob = new Blob([byte], {type: typeFile});
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    var fileName = reportName;
    link.download = fileName;
    link.click();
 }
</script>

<style>
.text-center {
	text-align: center;
}
.table thead th {
	border-bottom: unset !important;
	
}

.table-espefic {
	margin-bottom: unset;
	margin-top: unset;
}

.table-espefic-margin {
	margin-bottom: -1rem;
	margin-top: -1rem;
}

.table {
    padding: unset !important;
}

.table-specific td {
	background-color: #e6e8e880; 
}

.table-specific thead {
	background-color: #02b1d896; 
	width: 100%;
	height: 50px;
	margin: 0;
	color: white;
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0
		rgba(0, 0, 0, 0.19);
}
.separate{
    height: 25px;
}
.rigth-especific {
	text-align: right !important;
}
.form-row {
    margin-right: unset;
    margin-left: unset;
}
</style>
