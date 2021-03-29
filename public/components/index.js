Vue.component('indexPage', {
  data() {
    return {
      inputLegajo: '',
      afiliadoRam: {
        legajo: '',
        nombre: '',
        apellido: '',
        DNI: '',
        saldoTotal: '',
        saldoDisponible: '',
      },
      datos: [
        {
          legajo: 2688,
          nombre: 'Gaston',
          apellido: 'Avile',
          DNI: 22554658,
          saldoTotal: 25000,
          saldoDisponible: 8000,
        },
        {
          legajo: 2628,
          nombre: 'Gustavo',
          apellido: 'Perez',
          DNI: 24254658,
          saldoTotal: 15000,
          saldoDisponible: 4000,
        },
        {
          legajo: 2618,
          nombre: 'Ezequiel',
          apellido: 'Funes',
          DNI: 125523238,
          saldoTotal: 5000,
          saldoDisponible: 100,
        },
        {
          legajo: 2313,
          nombre: 'Diego',
          apellido: 'Ibarra',
          DNI: 255461238,
          saldoTotal: 10000,
          saldoDisponible: 1100,
        },
        {
          legajo: 1688,
          nombre: 'Ivo',
          apellido: 'Fernandez',
          DNI: 424254658,
          saldoTotal: 45000,
          saldoDisponible: 11000,
        },
        {
          legajo: 688,
          nombre: 'Susana',
          apellido: 'Estoqui',
          DNI: 244454658,
          saldoTotal: 20000,
          saldoDisponible: 1230,
        },
        {
          legajo: 112,
          nombre: 'Elisa',
          apellido: 'Estoqui',
          DNI: 24445464,
          saldoTotal: 20000,
          saldoDisponible: 1230,
        },
        {
          legajo: 4088,
          nombre: 'Mariana',
          apellido: 'Di Domenica',
          DNI: 244454618,
          saldoTotal: 20000,
          saldoDisponible: 1230,
        },
        {
          legajo: 5688,
          nombre: 'Hugo',
          apellido: 'Saldo',
          DNI: 244454628,
          saldoTotal: 20000,
          saldoDisponible: 1230,
        },
      ],
      inputImporte: 0,
      newAfiliado: false,
      modificacion: false,
    }
  },
  methods: {
    pageToNewAfiliado() {
      this.newAfiliado = !this.newAfiliado
    },
    pageToAfiliado(legajo) {
      this.modificacion = !this.modificacion
      const found = this.datos.find((element) => element.legajo == legajo)
      this.afiliadoRam = found
    },
  },

  template: `  
    <div class="container">    
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Mutual</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                @click="pageToNewAfiliado"
                  class="nav-link"
                  aria-current="page"                  
                  >Agregar afiliado</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Ordenes</a>
              </li>
            </ul>
            <div class="d-flex">
              <input
                v-model="inputLegajo"
                class="form-control me-2"
                type="search"
                placeholder="Buscar por legajo"
                aria-label="Search"
              />
            </div>
          </div>
        </div>
      </nav>

      <table class="table" v-show="!newAfiliado && !modificacion">
        <thead>
          <tr>
            <th scope="col">Legajo</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">DNI</th>
            <th scope="col">Saldo total</th>
            <th scope="col">Saldo disp.</th>
            <th scope="col">Ver</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="element in datos"
            v-bind:key="element.legajo"
            v-show="inputLegajo == element.legajo || inputLegajo == ''"
          >
            <th scope="row">{{ element.legajo }}</th>
            <td>{{element.nombre}}</td>
            <td>{{element.apellido}}</td>
            <td>{{element.DNI}}</td>
            <td>{{element.saldoTotal}}</td>
            <td>{{element.saldoDisponible}}</td>
            <td>
              <button class="btn btn-primary" @click="pageToAfiliado(element.legajo)">Modificar</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="card" v-show="newAfiliado">
        <h5 class="card-header">Nuevo Afiliado</h5>
        <div class="card-body">
          <h5 class="card-title">Datos</h5>
          <form>
            <div class="mb-3">
              <label for="inputLegajo" class="form-label">Legajo</label>
              <input type="number" class="form-control" id="inputLegajo" />
            </div>modificacion
            <div class="mb-3">
              <label for="inputNombre" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="inputNombre" />
            </div>
            <div class="mb-3">
              <label for="inputApellido" class="form-label">Apellido</label>
              <input type="text" class="form-control" id="inputApellido" />
            </div>
            <div class="mb-3">
              <label for="inputDni" class="form-label">DNI</label>
              <input type="number" class="form-control" id="inputDni" />
            </div>
            <div class="mb-3 d-flex">
              <label for="customRange1" class="form-label">Saldo limite</label>
              <input
                v-model="inputImporte"
                type="range"
                class="form-range m-3"
                min="0"
                max="50000"
                step="500"
              />
              <input
                type="number"
                id="customRange1"
                value="600"
                v-model="inputImporte"
              />
            </div>
            
            <button type="submit" class="btn btn-primary disabled">
              Guardar
            </button>
          </form>
        </div>
      </div>
      
      
      <div class="card" v-show="modificacion">
      <h5 class="card-header">Afiliado Legajo {{ afiliadoRam.legajo }}</h5>
      <div class="card-body">
        <h5 class="card-title">Datos</h5>
        <form>
          <div class="mb-3">
            <label for="inputLegajo" class="form-label">Legajo</label>
            <input type="number" class="form-control" :value='afiliadoRam.legajo' />
          </div>
          <div class="mb-3">
            <label for="inputNombre" class="form-label">Nombre</label>
            <input type="text" class="form-control"  :value='afiliadoRam.nombre'/>
          </div>
          <div class="mb-3">
            <label for="inputApellido" class="form-label">Apellido</label>
            <input type="text" class="form-control"  :value='afiliadoRam.apellido'/>
          </div>
          <div class="mb-3">
            <label for="inputDni" class="form-label">DNI</label>
            <input type="number" class="form-control" :value='afiliadoRam.DNI'/>
          </div>
          <div class="mb-3 d-flex">
            <label for="customRange1" class="form-label">Saldo limite</label>
            <input
              
              type="range"
              class="form-range m-3"
              min="0"
              max="50000"
              step="500"
              v-model="afiliadoRam.saldoTotal"
            />
            <input
              type="number"              
              
              v-model="afiliadoRam.saldoTotal"
            />
          </div>
          
          <button type="submit" class="btn btn-primary disabled">
            Guardar
          </button>
        </form>
      </div>
    </div>
    </div>
    `,
})
new Vue({
  el: '#app',
  data() {
    return {}
  },
})
