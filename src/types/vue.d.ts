import Vue from 'vue'
import { Options } from '@/types'

declare module 'vue/types/vue' {
  interface Vue {
    $http: any
    $fetch(p: Options): any
  }
}