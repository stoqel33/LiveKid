<template>
   <transition name="modal-fade">
      <div class="modal-backdrop">
         <div
            class="modal"
            role="dialog"
            aria-labelledby="modalTitle"
            aria-describedby="modalDescription"
         >
            <Table
               :content="content"
               :config="tableConfig"
               contenteditable="true"
            />

            <button
               type="button"
               class="btn-green"
               @click="close"
               aria-label="Close modal"
            >
               Close editor!
            </button>
         </div>
      </div>
   </transition>
</template>
<script>
import Table from '@/components/Table.vue'

export default {
   components: {
      Table
   },
   name: 'modal',
   methods: {
      close() {
         this.$emit('close')
      },
      updateItem(e, item) {
         e.preventDefault(), (item.name = e.target.innerText)
      }
   },
   setup(props, { content }) {
      const tableConfig = {
         columns: [
            { key: 'id', header: 'ID' },
            { key: 'name', header: 'Name' },
            { key: 'cords_display', header: 'Cords' },
            { key: 'tags_display', header: 'Tags' },
            { key: 'status', header: 'Status' }
         ]
      }

      console.log(content)

      return { tableConfig, content }
   }
}
</script>
<style>
.modal-backdrop {
   position: fixed;
   top: 0;
   bottom: 0;
   left: 0;
   right: 0;
   background-color: rgba(0, 0, 0, 0.3);
   display: flex;
   justify-content: center;
   align-items: center;
}

.modal {
   background: #ffffff;
   box-shadow: 2px 2px 20px 1px;
   overflow-x: auto;
   display: flex;
   flex-direction: column;
}

.modal-header,
.modal-footer {
   padding: 15px;
   display: flex;
}

.modal-header {
   border-bottom: 1px solid #eeeeee;
   color: #4aae9b;
   justify-content: space-between;
}

.modal-footer {
   border-top: 1px solid #eeeeee;
   justify-content: flex-end;
}

.modal-body {
   position: relative;
   padding: 20px 10px;
}

.btn-close {
   border: none;
   font-size: 20px;
   padding: 20px;
   cursor: pointer;
   font-weight: bold;
   color: #4aae9b;
   background: transparent;
}

.btn-green {
   color: white;
   background: #4aae9b;
   border: 1px solid #4aae9b;
   border-radius: 2px;
}
</style>
