<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" size="small" :inline="true" v-show="showSearch" label-width="68px">
      <!-- <el-form-item label="冗余1" prop="extra1">
        <el-input
          v-model="queryParams.extra1"
          placeholder="请输入冗余1"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="冗余2" prop="extra2">
        <el-input
          v-model="queryParams.extra2"
          placeholder="请输入冗余2"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="冗余3" prop="extra3">
        <el-input
          v-model="queryParams.extra3"
          placeholder="请输入冗余3"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="冗余4" prop="extra4">
        <el-input
          v-model="queryParams.extra4"
          placeholder="请输入冗余4"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="冗余5" prop="extra5">
        <el-input
          v-model="queryParams.extra5"
          placeholder="请输入冗余5"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item> -->
      <el-form-item label="avax地址" prop="avaxAddr">
        <el-input
          v-model="queryParams.avaxAddr"
          placeholder="请输入avax地址"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="锁仓金额" prop="lockAmount">
        <el-input
          v-model="queryParams.lockAmount"
          placeholder="请输入锁仓金额"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="服务费" prop="serviceFee">
        <el-input
          v-model="queryParams.serviceFee"
          placeholder="请输入服务费"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="实收金额" prop="actualAmountReceived">
        <el-input
          v-model="queryParams.actualAmountReceived"
          placeholder="请输入实收金额"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="avax交易区块" prop="avaxTransBlock">
        <el-input
          v-model="queryParams.avaxTransBlock"
          placeholder="请输入avax交易区块"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="avax交易hash" prop="avaxTx">
        <el-input
          v-model="queryParams.avaxTx"
          placeholder="请输入avax交易hash"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="btc交易区块" prop="btcTransBlock">
        <el-input
          v-model="queryParams.btcTransBlock"
          placeholder="请输入btc交易区块"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="btc交易hash" prop="btcTx">
        <el-input
          v-model="queryParams.btcTx"
          placeholder="请输入btc交易hash"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="btc链接收地址" prop="reciveBtcAddr">
        <el-input
          v-model="queryParams.reciveBtcAddr"
          placeholder="请输入btc链接收地址"
          clearable
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <!-- <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['system:order:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['system:order:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['system:order:remove']"
        >删除</el-button>
      </el-col> -->
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['system:order:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="orderList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="ID" align="center" prop="id" />
      <!-- <el-table-column label="冗余1" align="center" prop="extra1" />
      <el-table-column label="冗余2" align="center" prop="extra2" />
      <el-table-column label="冗余3" align="center" prop="extra3" />
      <el-table-column label="冗余4" align="center" prop="extra4" />
      <el-table-column label="冗余5" align="center" prop="extra5" /> -->
      <el-table-column label="avax地址" width="120" align="center" prop="avaxAddr">
        <template slot-scope="scope">
          <div style="display: flex;align-items: center;">
            <p>{{ $common.getUserShowAddress(scope.row.avaxAddr)}}</p>
            <img style="width: 20px;height: auto;cursor: pointer;" 
            src="../../../assets/images/copy.png" @click="copy(scope.row.avaxAddr)" alt="">
          </div>
        </template>
      </el-table-column>
      <el-table-column label="锁仓金额" align="center" prop="lockAmount" >
        <template slot-scope="scope">
          <span>{{  $common.weiToDecimal(scope.row.lockAmount)}} APEA</span>
        </template>
      </el-table-column>
      <el-table-column label="服务费" align="center" prop="serviceFee" >
        <template slot-scope="scope">
          <span>{{  $common.weiToDecimal($common.toolNumber(scope.row.serviceFee)) }} APEA</span>
        </template>
      </el-table-column>
      <el-table-column label="实收金额" align="center" prop="actualAmountReceived">
        <template slot-scope="scope">
          <span>{{  $common.weiToDecimal($common.toolNumber(scope.row.actualAmountReceived)) }} APEA</span>
        </template>
      </el-table-column>
      <!-- <el-table-column label="跨链状态" align="center" prop="status">
        <template slot-scope="scope">
          <dict-tag :options="dict.type.sys_bridge_status" :value="scope.row.bridgeStatus"/>
        </template>
      </el-table-column> -->
      <!-- <el-table-column label="avax交易区块" align="center" prop="avaxTransBlock" /> -->
      <el-table-column label="avax交易hash" align="center" prop="avaxTx" >
        <template slot-scope="scope">
          <div style="display: flex;align-items: center;">
            <p>{{ $common.getUserShowAddress(scope.row.avaxTx)}}</p>
            <img style="width: 20px;height: auto;cursor: pointer;margin-left: 5px;" 
            src="../../../assets/images/copy.png" @click="copy(scope.row.avaxTx)" alt="">
          </div>
        </template>
      </el-table-column>
      <!-- <el-table-column label="btc交易区块" align="center" prop="btcTransBlock" /> -->
      <!-- <el-table-column label="btc交易hash" align="center" prop="btcTx" >
        <template slot-scope="scope">
          <div style="display: flex;align-items: center;">
            <p>{{ $common.getUserShowAddress(scope.row.btcTx)}}</p>
            <img style="width: 20px;height: auto;cursor: pointer;margin-left: 5px;" 
            src="../../../assets/images/copy.png" @click="copy(scope.row.btcTx)" alt="">
          </div>
        </template>
      </el-table-column> -->
      <el-table-column label="btc链接收地址" width="120" align="center" prop="reciveBtcAddr">
        <template slot-scope="scope">
          <div style="display: flex;align-items: center;">
            <p>{{ $common.getUserShowAddress(scope.row.reciveBtcAddr)}}</p>
            <img style="width: 20px;height: auto;cursor: pointer;" 
            src="../../../assets/images/copy.png" @click="copy(scope.row.reciveBtcAddr)" alt="">
          </div>
        </template>
      </el-table-column>
      <el-table-column label="跨链状态" align="center" prop="status">
        <template slot-scope="scope">
          <dict-tag :options="dict.type.sys_bridge_status" :value="scope.row.status"/>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            
          >修改</el-button>
          <!-- <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['system:order:remove']"
          >删除</el-button> -->
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改AvaxToBtcOrder对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <!-- <el-form-item label="冗余1" prop="extra1">
          <el-input v-model="form.extra1" placeholder="请输入冗余1" />
        </el-form-item>
        <el-form-item label="冗余2" prop="extra2">
          <el-input v-model="form.extra2" placeholder="请输入冗余2" />
        </el-form-item>
        <el-form-item label="冗余3" prop="extra3">
          <el-input v-model="form.extra3" placeholder="请输入冗余3" />
        </el-form-item>
        <el-form-item label="冗余4" prop="extra4">
          <el-input v-model="form.extra4" placeholder="请输入冗余4" />
        </el-form-item>
        <el-form-item label="冗余5" prop="extra5">
          <el-input v-model="form.extra5" placeholder="请输入冗余5" />
        </el-form-item> -->
        <!-- <el-form-item label="avax地址" prop="avaxAddr">
          <el-input v-model="form.avaxAddr" placeholder="请输入avax地址" />
        </el-form-item>
        <el-form-item label="锁仓金额" prop="lockAmount">
          <el-input v-model="form.lockAmount" placeholder="请输入锁仓金额" />
        </el-form-item>
        <el-form-item label="服务费" prop="serviceFee">
          <el-input v-model="form.serviceFee" placeholder="请输入服务费" />
        </el-form-item>
        <el-form-item label="实收金额" prop="actualAmountReceived">
          <el-input v-model="form.actualAmountReceived" placeholder="请输入实收金额" />
        </el-form-item>
        <el-form-item label="avax交易区块" prop="avaxTransBlock">
          <el-input v-model="form.avaxTransBlock" placeholder="请输入avax交易区块" />
        </el-form-item>
        <el-form-item label="avax交易hash" prop="avaxTx">
          <el-input v-model="form.avaxTx" placeholder="请输入avax交易hash" />
        </el-form-item>
        <el-form-item label="btc交易区块" prop="btcTransBlock">
          <el-input v-model="form.btcTransBlock" placeholder="请输入btc交易区块" />
        </el-form-item>
        <el-form-item label="btc交易hash" prop="btcTx">
          <el-input v-model="form.btcTx" placeholder="请输入btc交易hash" />
        </el-form-item>
        <el-form-item label="btc链接收地址" prop="reciveBtcAddr">
          <el-input v-model="form.reciveBtcAddr" placeholder="请输入btc链接收地址" />
        </el-form-item> -->
        <el-form-item label="跨链状态" prop="status">
          <el-select v-model="form.status" placeholder="请选择跨链状态">
            <el-option
              v-for="dict in dict.type.sys_bridge_status"
              :key="dict.value"
              :label="dict.label"
              :value="parseInt(dict.value)"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listOrder, getOrder, delOrder, addOrder, updateOrder } from "@/api/system/avaxtobtcorder";

export default {
  name: "Order",
  dicts: ['sys_bridge_status'],
  data() {
    return {
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // AvaxToBtcOrder表格数据
      orderList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        extra1: null,
        extra2: null,
        extra3: null,
        extra4: null,
        extra5: null,
        avaxAddr: null,
        lockAmount: null,
        serviceFee: null,
        actualAmountReceived: null,
        status: null,
        avaxTransBlock: null,
        avaxTx: null,
        btcTransBlock: null,
        btcTx: null,
        reciveBtcAddr: null
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询AvaxToBtcOrder列表 */
    getList() {
      this.loading = true;
      listOrder(this.queryParams).then(response => {
        this.orderList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        id: null,
        extra1: null,
        extra2: null,
        extra3: null,
        extra4: null,
        extra5: null,
        createTime: null,
        updateTime: null,
        avaxAddr: null,
        lockAmount: null,
        serviceFee: null,
        actualAmountReceived: null,
        status: null,
        avaxTransBlock: null,
        avaxTx: null,
        btcTransBlock: null,
        btcTx: null,
        reciveBtcAddr: null
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.id)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加AvaxToBtcOrder";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getOrder(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改AvaxToBtcOrder";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateOrder(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addOrder(this.form).then(response => {
              this.$modal.msgSuccess("新增成功");
              this.open = false;
              this.getList();
            });
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const ids = row.id || this.ids;
      this.$modal.confirm('是否确认删除AvaxToBtcOrder编号为"' + ids + '"的数据项？').then(function() {
        return delOrder(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      this.download('system/avaxtobtcorder/export', {
        ...this.queryParams
      }, `order_${new Date().getTime()}.xlsx`)
    }
  }
};
</script>
