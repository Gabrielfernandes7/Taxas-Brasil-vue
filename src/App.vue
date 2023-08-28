<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { fetchTaxas, Taxa } from './services/api';

export default defineComponent({
  name: "App",
  setup() {
    // criando uma variável taxas
    // <Taxas[]> indica array
    // ([]) indica array vazio
    const taxas = ref<Taxa[]>([]);

    onMounted(async () => {
      try {
        taxas.value = await fetchTaxas();
      } catch (error) {
        console.error("Erro ao buscar as taxas", error)
      }
    });

    return {
      taxas,
    }
  }
});

</script>

<template>
    <div class="box-conteudo">
      <h1>Taxas atuais: </h1>

      <ul>
        <li v-for="taxa in taxas" :key="taxa.nome">
          <b>{{ taxa.nome }}</b>: <b>{{ taxa.valor }}</b>
        </li>
      </ul>

    </div>
</template>

<style scoped>
@import url('./assets/style.css');
</style>
