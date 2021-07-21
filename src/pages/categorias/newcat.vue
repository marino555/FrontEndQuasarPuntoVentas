<template>
  <q-page padding>
   <q-toolbar-title>nueva categoria</q-toolbar-title>

   <q-card class="my-card" style="max-width: 450px">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Nueva categoria</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-separator />


       <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        square outlined
        v-model="nombre"
        label="nombre categoria *"
        hint="Escriba el nombre de la categoria"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Porfavor escriba el nombre de la categoria']"
      />

      <q-input
        square outlined
        type="number"
        v-model="age"
        label="tu edad *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
      />

      <q-toggle v-model="accept" label="yo acepto crear la categoria" />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>

      
      


    </q-card>
  </q-page>
</template>


<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
   name: 'newcat',
  setup () {
    const $q = useQuasar()

    const nombre = ref(null)
    const age = ref(null)
    const accept = ref(false)

    return {
      nombre,
      age,
      accept,

      onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },

      onReset () {
        nombre.value = null
        age.value = null
        accept.value = false
      }
    }
  }
}
</script>