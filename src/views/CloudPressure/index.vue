<!--
* @Author: dgiot-fe <dgiot@foxmail.com>
* @Date: 2022-05-12 18:02:23
* @LastEditors: 18:02
* @LastEditTime: 2022-05-12 18:02:23
* @Description:
* @FilePath: src\views\CloudPressure\index.vue
* @DocumentLink: https://dev.iotn2n.com
* @github: https://github.com/dgiot/dgiot-dashboard.git
* @name: index
-->
<template>
  <div
    ref="pressure-table"
    class="pressure-container"
    :class="{ 'dgiot-fullscreen': isFullscreen }"
  >
    <div class="modal">
      <el-dialog
        append-to-body
        :before-close="closeMap"
        class="map_dialog"
        :title="$translateTitle('pressure.安装位置')"
        :visible.sync="dialog_device"
        width="60%"
      >
        <el-card>
          <div v-if="false" slot="title"></div>
          <label>
            {{ $translateTitle('pressure.关键词') }}
            <el-input v-model="map.keyword">
              <i
                slot="suffix"
                class="el-input__icon el-icon-search"
                style="cursor: pointer"
              ></i>
            </el-input>
          </label>
          <!--          <label>-->
          <!--            地区：-->
          <!--            <el-input v-model="map.location" />-->
          <!--          </label>-->
          <label>
            {{ $translateTitle('pressure.安装位置') }}
            <el-input v-model="form.address">
              <i
                slot="suffix"
                class="el-icon-s-promotion"
                style="cursor: pointer"
                @click="map.innerVisible = !map.innerVisible"
              ></i>
            </el-input>
          </label>
          <baidu-map
            ak="WpeAb6pL4tsX2ZVd56GHbO9Ut6c4HZhG"
            :center="mapLabel.position"
            :map-click="false"
            :scroll-wheel-zoom="true"
            style="height: 500px"
            :style="{ height: mapHeight, width: mapWidth }"
            :zoom="14"
            @click="mapClick"
          >
            <bm-circle
              :center="mapLabel.position"
              :editing="true"
              radius="1200"
              stroke-color="blue"
              :stroke-opacity="0.5"
              :stroke-weight="1"
            />
            <bm-view
              class="map"
              :style="{ height: mapHeight, width: mapWidth }"
            />
            <bm-local-search
              :auto-viewport="true"
              :keyword="map.keyword"
              :location="map.location"
            />
            <bm-control>
              <bm-panorama
                anchor="BMAP_ANCHOR_TOP_LEFT"
                :offset="{ width: 500, height: 0 }"
              />
              <bm-overview-map :is-open="true" />
              <bm-scale :offset="{ width: 260, height: 0 }" />
              <bm-city-list :offset="{ width: 330, height: 0 }" />
              <bm-map-type
                anchor="BMAP_ANCHOR_TOP_LEFT"
                :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
                :offset="{ width: 400, height: 0 }"
              />
            </bm-control>
            <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT" />
            <bm-geolocation
              anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
              :auto-location="true"
              :show-address-bar="true"
              :show-zoom-info="true"
            />
          </baidu-map>
        </el-card>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialog_device = false">
            {{ $translateTitle('pressure.取消') }}
          </el-button>
          <el-button type="primary" @click="editMap">
            {{ $translateTitle('pressure.确定') }}
          </el-button>
        </span>
      </el-dialog>
      <Modal
        v-model="draw.settings.visibility"
        :closable="true"
        fullscreen
        :title="draw.row.name"
        @on-cancel="close"
      >
        <div>
          <Tabs size="small" :value="defaultTable">
            <TabPane
              v-for="(item, index) in draw.settings.data"
              :key="index"
              :label="item.title"
              :name="item.title"
            >
              <dgiot-amis :schema="item.data" :show-help="false" />
            </TabPane>
          </Tabs>
        </div>
        <div slot="footer"></div>
      </Modal>
    </div>
    <div class="draw">
      <a-drawer
        :body-style="{ paddingBottom: '80px' }"
        title=""
        :visible="draw.form.visibility"
        :width="720"
        @close="onClose"
      >
        <Tabs size="small" :value="defaultTable">
          <TabPane
            v-for="(item, index) in draw.settings.data"
            :key="index + ''"
            :label="item.title"
            :name="item.title"
          >
            <dgiot-amis :schema="item.data" :show-help="false" />
          </TabPane>
        </Tabs>
      </a-drawer>
    </div>
    <dgiot-query-form>
      <dgiot-query-form-left-panel>
        <el-form
          ref="form"
          :inline="true"
          label-width="0"
          :model="queryForm"
          @submit.native.prevent
        >
          <el-form-item>
            <el-input
              v-model="queryForm.name"
              :placeholder="$translateTitle('pressure.请输入压测任务名')"
            />
          </el-form-item>
          <el-form-item>
            <el-button
              icon="el-icon-search"
              native-type="submit"
              type="primary"
              @click="handleQuery"
            >
              {{ $translateTitle('concentrator.search') }}
            </el-button>
            <el-button
              icon="el-icon-plus"
              type="primary"
              @click.native="handleView('_', 'reportFrom')"
            >
              {{ $translateTitle('cloudTest.add') }}
            </el-button>
          </el-form-item>
        </el-form>
      </dgiot-query-form-left-panel>
    </dgiot-query-form>

    <a-tabs v-model="activeKey">
      <a-tab-pane key="task" :tab="$translateTitle('pressure.压测列表')">
        <el-table
          ref="tableSort"
          v-loading="listLoading"
          :border="border"
          :data="list"
          :height="$baseTableHeight(0)"
          :size="lineHeight"
          :stripe="stripe"
        >
          <el-table-column
            align="center"
            :label="$translateTitle('cloudTest.number')"
            show-overflow-tooltip
            sortable
            width="145"
          >
            <template #default="{ $index }">
              {{ $index + 1 }}
            </template>
          </el-table-column>
          <el-table-column
            v-for="(item, index) in finallyColumns"
            :key="index"
            align="center"
            :label="item.label"
            sortable
            :width="item.width"
          >
            <template #default="{ row }">
              <span v-if="item.label === $translateTitle('pressure.评级')">
                <el-rate v-model="row.rate" disabled />
              </span>
              <span v-else>{{ row[item.prop] }}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$translateTitle('pressure.压测启停')"
            width="180"
          >
            <template #default="{ row }">
              <a-switch
                :checked="row.isEnable"
                :checked-children="$translateTitle('device.start')"
                :un-checked-children="$translateTitle('device.stop')"
                @click="toggleSwitch(row)"
              />
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            :label="$translateTitle('pressure.压测状态')"
            width="220"
          >
            <template #default="{ row }">
              <el-tag dark :type="row.status == 'ONLINE' ? 'info' : ''">
                {{
                  row.status == 'ONLINE'
                    ? $translateTitle('pressure.压测中')
                    : $translateTitle('pressure.未压测')
                }}
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            :label="$translateTitle('pressure.安装位置')"
            prop="address"
            show-overflow-tooltip
            sortable
            width="auto"
          >
            <template #default="{ row }">
              <span
                style="color: #67c23a"
                type="success"
                @click="showAdddress(row)"
              >
                {{ row.address || '---' }}
              </span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            fixed="right"
            :label="$translateTitle('pressure.操作')"
          >
            <template #default="{ row }">
              <el-button type="text" @click="handleClick(row, 'setting')">
                {{ $translateTitle('pressure.定时任务') }}
              </el-button>
              <el-button type="text" @click="handleClick(row, 'task')">
                {{ $translateTitle('pressure.压测配置') }}
              </el-button>
              <el-button type="text" @click="handleClick(row, 'clone')">
                {{ $translateTitle('pressure.克隆任务') }}
              </el-button>
              <el-button type="text" @click="handleClick(row, 'delete')">
                {{ $translateTitle('pressure.删除任务') }}
              </el-button>
            </template>
          </el-table-column>
          <template #empty>
            <el-image
              class="dgiot-data-empty"
              :src="
                require('../../../public/assets/images/platform/assets/empty_images/data_empty.png')
              "
            />
          </template>
        </el-table>
        <el-pagination
          background
          :current-page="queryForm.size"
          :layout="layout"
          :page-size="queryForm.limit"
          :total="total"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
        />
      </a-tab-pane>
      <!--      <a-tab-pane key="report" tab="任务报告">-->
      <!--        <dgiot-empty />-->
      <!--      </a-tab-pane>-->
    </a-tabs>
    <table-edit ref="edit" @fetch-data="fetchData" />
  </div>
</template>

<script>
  import {
    queryDevice,
    getDevice,
    delDevice,
    postDevice,
    putDevice,
  } from '@/api/Device'
  import { queryProduct } from '@/api/Product'
  import { queryProductTemplet } from '@/api/ProductTemplet'
  import TableEdit from '@/views/DeviceCloud/empty/tableEdit'
  import { queryView } from '@/api/View'
  import { mapGetters } from 'vuex'

  export default {
    name: 'Pressure',
    components: {
      TableEdit,
    },
    props: {},
    data() {
      return {
        mapHeight: '500px',
        mapWidth: '100%',
        dialog_device: false,
        mapLabel: {
          content: '我爱北京天安门',
          style: {
            color: 'red',
            fontSize: '24px',
          },
          position: {
            lng: 116.404,
            lat: 39.915,
          },
          title: '我爱北京天安门',
        },
        editRow: {},
        map: {
          innerVisible: false,
          keyword: '余杭区良渚平高创业城c1座',
          location: '杭州',
        },
        taskData: {},
        product: '',
        form: {
          address: '',
          name: '',
          url: '',
          owner: '',
          type: '',
          approver: '',
          dateTime: '',
          description: '',
        },
        rules: {
          name: [{ required: true, message: 'Please enter user name' }],
          url: [{ required: true, message: 'please enter url' }],
          owner: [{ required: true, message: 'Please select an owner' }],
          type: [{ required: true, message: 'Please choose the type' }],
          approver: [{ required: true, message: 'Please choose the approver' }],
          dateTime: [
            {
              required: true,
              message: 'Please choose the dateTime',
              type: 'object',
            },
          ],
          description: [
            { required: true, message: 'Please enter url description' },
          ],
        },
        defaultTable: '',
        draw: {
          row: {},
          settings: {
            data: [],
            visibility: false,
          },
          form: {
            visibility: false,
          },
        },
        activeKey: 'task',
        infoData: 'Empty',
        isFullscreen: false,
        border: true,
        height: this.$baseTableHeight(1),
        stripe: true,
        lineHeight: 'medium',
        checkList: [
          this.$translateTitle('pressure.压测任务'),
          this.$translateTitle('pressure.开始时间'),
          this.$translateTitle('pressure.结束时间'),
          this.$translateTitle('pressure.压测任务状态'),
        ],
        columns: [
          {
            label: this.$translateTitle('pressure.压测任务'),
            width: 'auto',
            prop: 'name',
            sortable: true,
            disableCheck: true,
          },
          {
            label: this.$translateTitle('pressure.开始时间'),
            width: '200',
            prop: 'startTime',
            sortable: true,
          },
          {
            label: this.$translateTitle('pressure.结束时间'),
            width: '200',
            prop: 'endTime',
            sortable: true,
          },
        ],
        list: [],
        imageList: [],
        listLoading: false,
        layout: 'total, sizes, prev, pager, next, jumper',
        total: 0,
        selectRows: '',
        queryForm: {
          skip: 0,
          limit: 10,
          name: '',
          search: '',
          type: 'name',
        },
      }
    },
    computed: {
      ...mapGetters({
        language: 'settings/language',
      }),
      dragOptions() {
        return {
          animation: 600,
          group: 'description',
        }
      },
      finallyColumns() {
        return this.columns.filter((item) =>
          this.checkList.includes(item.label)
        )
      },
    },
    watch: {
      language: {
        handler(val) {
          this.translateTbale(val)
        },
        immediate: true,
      },
    },
    async mounted() {
      await this.queryZetaProduct()
    },
    destroyed() {},
    methods: {
      close(i) {
        return new Promise((resolve) => {
          this.$Modal.confirm({
            title:
              row.isEnable == true
                ? this.$translateTitle('pressure.压测任务停止')
                : this.$translateTitle('pressure.压测任务启动'),
            content:
              this.$translateTitle('pressure.您确认要手动开始该压测任务吗') +
              '?',
            onOk: () => {
              resolve()
              row.isEnable = !row.isEnable
              this.switchTask(row)
            },
          })
        })
      },
      showAdddress(item) {
        this.editRow = item
        this.map.keyword = item?.address ? item.address : this.map.keyword
        this.form.address = item?.address ? item.address : this.form.keyword
        const position = {
          lng: item?.location?.longitude
            ? Number(item.location.longitude)
            : 120.161324,
          lat: item?.location?.latitude
            ? Number(item.location.latitude)
            : 30.26244,
        }
        this.mapLabel = {
          content: item.name,
          style: {
            color: 'red',
            fontSize: '12px',
          },
          position: position,
          title: item.address,
        }
        this.bmLabel = true
        this.dialog_device = true
      },
      translateTbale(type) {
        this.checkList = [
          this.$translateTitle('pressure.压测任务'),
          this.$translateTitle('pressure.开始时间'),
          this.$translateTitle('pressure.结束时间'),
          this.$translateTitle('pressure.压测任务状态'),
        ]
        this.columns = [
          {
            label: this.$translateTitle('pressure.压测任务'),
            width: 'auto',
            prop: 'name',
            sortable: true,
            disableCheck: true,
          },
          {
            label: this.$translateTitle('pressure.开始时间'),
            width: '200',
            prop: 'startTime',
            sortable: true,
          },
          {
            label: this.$translateTitle('pressure.结束时间'),
            width: '200',
            prop: 'endTime',
            sortable: true,
          },
        ]
        console.log(this.checkList, this.columns)
      },
      toggleSwitch(row) {
        return new Promise((resolve) => {
          this.$Modal.confirm({
            title:
              row.isEnable == true
                ? this.$translateTitle('pressure.压测任务停止')
                : this.$translateTitle('pressure.压测任务启动'),
            content:
              this.$translateTitle('pressure.您确认要手动开始该压测任务吗') +
              '?',
            onOk: () => {
              resolve()
              row.isEnable = !row.isEnable
              this.switchTask(row)
            },
          })
        })
      },
      async switchTask(row) {
        await putDevice(row.objectId, { isEnable: row.isEnable })
        const message =
          row.isEnable !== true
            ? this.$translateTitle('pressure.压测任务已停止')
            : this.$translateTitle('pressure.压测任务已启动')
        this.$message({
          type: 'success',
          message: message,
          showClose: true,
        })
      },
      async queryZetaProduct() {
        const { results: zeta = [] } = await queryProductTemplet({
          where: { name: 'zeta压测报告' },
        })
        const { results: product = [] } = await queryProduct({
          where: zeta?.[0]?.objectId
            ? { producttemplet: zeta?.[0]?.objectId }
            : {},
        })
        product?.[0]?.objectId ? (this.product = product?.[0]?.objectId) : ''
        this.product ? this.fetchData() : ''
      },
      async handleView(col, type) {
        col.objectId
          ? localStorage.setItem('parse_objectid', col.objectId)
          : localStorage.removeItem('parse_objectid')
        let params = {
          where: {
            class: 'Product',
            type: type,
            language: this.language,
          },
        }
        // col?.product?.objectId ? (params.where[key] = col.product.objectId) : ''
        const { results = [] } = await queryView(params)
        if (_.isEmpty(results)) {
          this.$message({
            type: 'info',
            message: `${this.$translateTitle('pressure.暂未配置语言类型为')}${
              this.language
            }${this.$translateTitle(
              'pressure.的'
            )}${type}${this.$translateTitle('pressure.表单')}`,
            showClose: true,
          })
          return false
        } else {
          this.draw.settings.data = results
          this.defaultTable = results?.[0]?.title || ''
          col === '_'
            ? (this.draw.form.visibility = true)
            : (this.draw.settings.visibility = true)
          //  设置默认点击事件
        }
      },
      mapClick(e) {
        this.location = {
          __type: 'GeoPoint',
          latitude: e.point.lat,
          longitude: e.point.lng,
        }
        this.mapLabel.position = {
          lng: e.point.lng,
          lat: e.point.lat,
        }
        const geocoder = new BMap.Geocoder()
        geocoder.getLocation(e.point, (rs) => {
          this.form.address = rs.address
        })
        console.log(this.form.address)
        if (this.editRow.objectId) {
          this.editRow.location = this.location
          this.editRow.address = this.form.address
        }
      },
      async editMap() {
        const mapInfo = {
          location: this.location,
          address: this.form.address,
        }
        await putDevice(this.editRow.objectId, mapInfo)
        this.dialog_device = false
        this.$message({
          message: this.$translateTitle('pressure.设备位置更新成功'),
          showClose: true,
          type: 'success',
        })
      },
      closeMap() {
        this.dialog_device = false
        this.map = {
          innerVisible: false,
          keyword: '余杭区良渚平高创业城c1座',
          location: '杭州',
        }
        this.mapLabel = {
          content: '我爱北京天安门',
          style: {
            color: 'red',
            fontSize: '24px',
          },
          position: {
            lng: 116.404,
            lat: 39.915,
          },
          title: '我爱北京天安门',
        }
      },
      async handleClone(device) {
        this.$message({
          type: 'success',
          message: this.$translateTitle('pressure.克隆任务成功'),
          showClose: true,
        })
        // 刪除掉一下参数去克隆
        delete device.createdAt
        delete device.updatedAt
        delete device.objectId
        delete device.endTime
        delete device.startTime
        device.isEnable = false
        device.devaddr = md5('Device' + Math.round(new Date()) + '').substring(
          0,
          10
        )
        device.name = 'clone_' + device.name
        await postDevice(device)
        await this.fetchData()
      },
      async onClose() {
        this.draw.form.visibility = false
        await this.fetchData()
      },
      handleEdit(row) {
        this.$refs['edit'].showEdit(row)
      },
      async handleClick(col, type) {
        this.draw.row = col
        localStorage.setItem('parse_objectid', col.objectId)
        switch (type) {
          case 'setting':
            await this.handleView(col, 'profile')
            break
          case 'task':
            await this.handleView(col, 'content')
            break
          case 'clone':
            await this.handleClone(this.draw.row)
            break
          case 'delete':
            this.handleDelete(col)
            break
        }
      },
      handleDelete(row) {
        this.$baseConfirm(
          this.$translateTitle('pressure.你确定要删除当前项吗'),
          null,
          async () => {
            await delDevice(row.objectId)
            this.$baseMessage(
              this.$translateTitle('pressure.任务删除成功'),
              'success',
              'dgiot-hey-message-success'
            )
            await this.fetchData()
          }
        )
      },
      handleSizeChange(val) {
        this.queryForm.limit = val
        this.fetchData()
      },
      handleCurrentChange(val) {
        this.queryForm.skip = Number(val - 1) * Number(this.queryForm.limit)
        this.fetchData()
      },
      handleQuery() {
        this.queryForm.limit = 10
        this.fetchData()
      },
      async fetchData() {
        this.listLoading = true
        let params = {
          skip: this.queryForm.skip,
          limit: this.queryForm.limit,
          count: 'objectId',
          order: '-createdAt',
          excludeKeys: 'properties',
          where: {
            product: this.product,
          },
        }
        this.queryForm.name
          ? (params.where.name = { $regex: this.queryForm.name })
          : ''
        const { count = 0, results = [] } = await queryDevice(params)
        const timeExp = /\[(\d{2,}):(\d{2})(?:\.(\d{2,3}))?]/g
        results.forEach((i) => {
          i.startTime = i?.profile?.startTime
            ? timeExp.exec(i.profile.startTime)
              ? this.$moment
                  .unix(i.profile.startTime)
                  .format('YYYY-MM-DD HH:mm:ss')
              : i.profile.startTime
            : this.$translateTitle('pressure.暂未配置')
          i.endTime = i?.profile?.endTime
            ? timeExp.exec(i.profile.endTime)
              ? this.$moment
                  .unix(i.profile.endTime)
                  .format('YYYY-MM-DD HH:mm:ss')
              : i.profile.endTime
            : this.$translateTitle('pressure.暂未配置')
        })
        this.list = results
        this.total = count
        this.listLoading = false
      },
    }, //如果页面有keep-alive缓存功能，这个函数会触发
  }
</script>
<style>
  @font-face {
    font-family: Ionicons;
    font-style: normal;
    font-weight: 400;
    src: url(/fonts/ionicons.woff2?v=3.0.0) format('woff2'),
      url(/fonts/ionicons.woff?v=3.0.0) format('woff'),
      url(/fonts/ionicons.ttf?v=3.0.0) format('truetype'),
      url(/fonts/ionicons.svg?v=3.0.0#Ionicons) format('svg');
  }
</style>
<style lang="scss" scoped>
  .el-row {
    margin-bottom: 0px !important;
  }

  .full-modal {
    height: 100vh !important;

    .ant-modal {
      top: 0;
      max-width: 100%;
      padding-bottom: 0;
      margin: 0;
    }

    .ant-modal-content {
      display: flex;
      flex-direction: column;
      height: calc(100vh);
    }

    .ant-modal-body {
      flex: 1;
    }
  }

  .index-container {
    width: 100%;
    heigth: 100%;
  }
</style>
